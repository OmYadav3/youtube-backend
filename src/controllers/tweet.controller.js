import mongoose, { isValidObjectId } from "mongoose"
import {Tweet} from "../models/tweet.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createTweet = asyncHandler(async (req, res) => {
    //TODO: create tweet
    const { content } = req.body
    const userId = req.user?._id

    if (!content) {
        throw new ApiError(400, "Content is required")
    }

    const newTweet = await Tweet.create({
        content,
        user: userId,
    })

    if(newTweet.content === " ") {
        throw new ApiError(400, "Tweet cannot be empty")
    }
    if(!newTweet){
        throw new ApiError(500, "Error while creating tweet")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            newTweet,
            "Tweet created successfully"
        )
    )
})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets

    const tweets = await Tweet.aggregate(
        [
            {
                $match: {
                    owner: req.user._id,
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'owner',
                    foreignField: '_id',
                    as: 'user',
                    pipeline: [
                        {
                            $project: {
                                username: 1,
                                fullName: 1,
                                avatar: 1
                            }
                        }
                    ]
                }
            },
            {
                $unwind: '$user'
            },
            {
                $project: {
                    _id: 0,
                    content: 1,
                    createdAt: 1,
                    user: {
                        _id: 1,
                        username: 1,
                        fullName: 1,
                        avatar: 1
                    }
                }
            }
        ]
    )

    if(!tweets.length) {
        throw new ApiError(404, "No tweets found for this user")
    }

    return res
   .status(200)
   .json(
    new ApiResponse(
        200,
        tweets,
        "User tweets fetched successfully"
    )
   )
})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
    const { tweetId } = req.params
    const { content } = req.body

    if(!isValidObjectId(tweetId)){
        throw new ApiError(400, "Invalid tweet ID")
    }
    if(!content){
        throw new ApiError(400, "Content is required")
    }

    const existedTweet = await Tweet.findOne({
        $and: [{_id: tweetId}, {owner: req.user._id}]
    })
    if(!existedTweet){
        throw new ApiError(404, "Tweet not found")
    }

    const UpdatedTweet = await Tweet.findByIdAndUpdate(
        tweetId,
        {
            $set: {
                content
            }
        },
        { 
            new: true 
        }
    )
    if(!UpdatedTweet){
        throw new ApiError(500, "Error while updating tweet")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            UpdatedTweet,
            "Tweet updated successfully"
        )
    )

})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
    const { tweetId } = req.params
    if(!isValidObjectId(tweetId)){
        throw new ApiError(400, "Invalid tweet ID")
    }

    const existedTweet = await Tweet.findOne({
        $and: [{_id: tweetId}, {owner: req.user._id}]
    })
    if(!existedTweet){
        throw new ApiError(404, "Tweet not found")
    }
    
    const deletedTweet = await Tweet.findByIdAndDelete(tweetId)
    if(!deletedTweet){
        throw new ApiError(500, "Error while deleting tweet")
    }
    
    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {},
            "Tweet deleted successfully"
        )
    )
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}
import mongoose from "mongoose";

const postSchema= mongoose.Schema({//to maintain uniformity in posts. all posts will follow this pattern
    title: String,
    message: String,
    creator: String,
    tags: [String], //array of strings
    selectedFile: String, //any file would be converted to string
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const PostMessage= mongoose.model('PostMessage', postSchema);// need to learn
                                                              // we will use this model to update, delete etc
export default PostMessage;

//The mongoose. model() function of the mongoose module is used to create a collection of a particular database of MongoDB
// so all things that follow schema pattern are part of model method created collection
import PostMessage from "../models/postMessage.js";

export const getPosts= async (req, res)=> {
    try{//learn
        const postMessages= await PostMessage.find(); // find() returns those elements array from model which staisfy condition

        res.status(200).json(postMessages); // sending the postMessages array with elements as objects(json)
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost= async (req, res)=> {
    const post= req.body; //a post is basically the body of the submission(anything related to submission can be accessed using req object)

    const newPost= new PostMessage(post); // this newPost is a component(object) like other posts, we pass post to PostMessage array
    
    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch(error){
        res.status(409).json({message: error.message});
    }
}
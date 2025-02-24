import Book from '../model/book.model.js';

export const getbook=async(req,res)=>{
    try{
const book = await Book.find();
res.status(200).json(book);
    } catch(err){
        console.log("Error: ",err);
        res.status(500).json("Internal server error")
    }
}
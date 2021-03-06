import {Request ,Response } from 'express';
import BookModel ,{Book} from '../models/books';

class BookControllers {

    public async index(req:Request , res:Response):Promise<void> {
       const books:Book[] = await BookModel.find()
        res.render('books/index', {
            title:'Books',
            books
        })
    }
 public renderFormBooks (req:Request,res:Response ):void{
          res.render('books/add' , {
              title:'Add a Book'
          })
 }
 public async saveBook(req:Request , res:Response){
      const {title , author , isbn}= req.body;
      const book:Book =  new BookModel( {title , author , isbn})
      await book.save();
            res.redirect('/books')   
 }

}
export const bookControllers = new BookControllers()

export class Book {
     bookId:number;
	 isbn:number;
	bookName:string;
	  bookAuthor:string;
	  bookPublisher:string;
	  status:string;

      constructor(
        bookId:number,
        isbn:number,
       bookName:string,
         bookAuthor:string,
         bookPublisher:string,
         status:string
      )
      {
        this.bookId = bookId;
		this.isbn = isbn;
		this.bookName = bookName;
		this.bookAuthor = bookAuthor;
		this.bookPublisher = bookPublisher;
		this.status = status;
      }


}

export class ReturnBook { 
    returnId: number;
    issuedId: number;
    studentId: number;
    bookId: number;
    actualReturnDate: string;
    
    constructor(
    returnId: number,
    issuedId: number,
    studentId: number,
    bookId: number,
    actualReturnDate: string
    ){
        this.returnId=returnId;
        this.issuedId=issuedId;
        this.studentId=studentId;
        this.bookId=bookId;
        this.actualReturnDate=actualReturnDate
    
    }
 
     
 
     
     
         
 
 }




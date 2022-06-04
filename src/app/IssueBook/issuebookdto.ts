export class Issuebookdto {
    bookId: number;	
	studentId:number;
	dateOfIssue:string;
	dateOfReturn:string;


    constructor(
        bookId: number,	
        studentId:number,
        dateOfIssue:string,
        dateOfReturn:string,


    )
    {
        this.bookId=bookId;
        this.studentId=studentId;
        this.dateOfIssue=dateOfIssue;
        this.dateOfReturn=dateOfReturn;

    }
    
}

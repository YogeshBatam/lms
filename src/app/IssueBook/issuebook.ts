export class Issuebook {
	issueId:number;	
	bookId: number;	
	studentId:number;
	dateOfIssue:string;
	dateOfReturn:string;
	returnedStatus:string;	
	returnId:number;
	constructor(
		issueId:number,	
		bookId: number,	
		studentId:number,
		dateOfIssue:string,
		dateOfReturn:string,
		returnedStatus:string,
		returnId:number
		
		)
		{
			this.issueId=issueId;
			this.bookId=bookId;
			this.studentId=studentId;
			this.dateOfIssue=dateOfIssue;
			this.dateOfReturn=dateOfReturn;
			this.returnedStatus=returnedStatus;
			this.returnId=returnId;
		}
}







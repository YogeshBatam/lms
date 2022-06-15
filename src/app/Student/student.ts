import { Book } from "../Book/book";

export class Student {
    studentId:number;
    firstName: string;
    lastName: string;
    contactNo:number;
    emailId: string;
    userName:string;
    password:string;
    issueBook:Book[];
    
    constructor(
        studentId:number,
        firstName: string,
        lastName: string,
        contactNo:number,
        emailId: string,
        userName:string,
        password:string,
        books:Book[]
        )
        {
            this.studentId=studentId;
            this.firstName=firstName;
            this.lastName=lastName;
            this.contactNo=contactNo;
            this.emailId=emailId;
            this.userName = userName;
            this.password = password; 
            this.issueBook=books;
        }
}

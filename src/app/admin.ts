export class Admin {
    librarianId:number;
    librarianUsername:string;
    librarianPassword:string;
    
    constructor(
        librarianId:number,
        librarianUsername:string,
        librarianPassword:string,
        )
        {     
            this.librarianId=librarianId;
            this.librarianUsername = librarianUsername;
            this.librarianPassword = librarianPassword 
        }
}

export class Fine {
    
   bookid: number;
   fineid: number;
   finedate: string;
   issueid: number;
   returnId: number;
   studentid: number;
   noOfDelayDays: number;
    fineamount: number;

constructor ( 
    fineid:number, 
     finedate:string,
      issueid:number,
        returnId:number,
          bookid:number,
           studentid:number,
             noOfDelayDays:number,
    numberfineamount:number) {

this.fineid = fineid;
this.finedate = finedate;
this.issueid = issueid;
this.returnId = returnId;
this.bookid = bookid;
this.studentid = studentid;
this.noOfDelayDays = noOfDelayDays;
this.fineamount = numberfineamount
 }
}
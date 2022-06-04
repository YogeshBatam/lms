import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fine } from '../fine';
import { FineService } from '../fine.service';


@Component({
  selector: 'app-create-fine',
  templateUrl: './create-fine.component.html',
  styleUrls: ['./create-fine.component.css']
})
export class CreateFineComponent implements OnInit {
fineService : FineService;
  fine:Fine = new Fine(0,'',0,0,0,0,0,0);
  
  
  constructor(private fineServices: FineService,
    private router: Router) {
      this.fineService=fineServices;
     }

  ngOnInit(): void {
  }
 saveFine(){
   this.fineService.createFine(this.fine).subscribe(data =>{
     console.log(data);
     this.goToFineList();
   },
   error => console.log(error));
   
 }
 goToFineList(){
    this.router.navigate(['/fine']);
 }
  
onSubmit(){
  console.log(this.fine);
  this.saveFine();
}
  


}
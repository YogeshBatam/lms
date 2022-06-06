import { Component, OnInit } from '@angular/core';
import { Fine } from '../fine';
import { FineService } from '../fine.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-fine-list',
  templateUrl: './fine-list.component.html',
  styleUrls: ['./fine-list.component.css']
})
export class FineListComponent implements OnInit {


  fine: Fine = new Fine(0,new Date(),0,0,0,0,0,0);
  fineArr: Fine[]=[];
 

  constructor(private FineService: FineService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFine();
    
  }
  private getFine(){
    this.FineService.getFineList().subscribe(data =>{
      this.fineArr =data;
    });
  }
  fineDetails(id: number){
    this.router.navigate(['fine-details',id]);
  }
  updateFine(id: number){
     this.router.navigate(['update-fine',id ]);
 }
 deleteFine(id: number){
   this.FineService.deleteFine(id).subscribe( data =>{
     console.log(data);
     this.getFine();
   })
 }
 }

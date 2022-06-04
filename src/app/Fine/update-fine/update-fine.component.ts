import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fine } from '../fine';
import { FineService } from '../fine.service';

@Component({
  selector: 'app-update-fine',
  templateUrl: './update-fine.component.html',
  styleUrls: ['./update-fine.component.css']
})
export class UpdateFineComponent implements OnInit {
  fineService : FineService;
  fine:Fine = new Fine(0,'',0,0,0,0,0,0);
   id: number=0;;
   
  constructor(private fineServices: FineService,
    private route: ActivatedRoute,
    private router: Router) {
      this.fineService=fineServices;
     }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fineServices.getFineById(this.id).subscribe(data =>{
      this.fine = data;
    }, error => console.log(error));
    
  }
  onSubmit(){
    this.fineServices.updateFine(this.id, this.fine).subscribe(data =>{
      this.goToFineList();

    }, error => console.log(error));
  }
  goToFineList(){
    this.router.navigate(['/fine']);
 }

}

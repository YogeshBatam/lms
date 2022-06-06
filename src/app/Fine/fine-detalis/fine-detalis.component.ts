import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FineService } from '../fine.service';
import { Fine} from '../fine';
@Component({
  selector: 'app-fine-detalis',
  templateUrl: './fine-detalis.component.html',
  styleUrls: ['./fine-detalis.component.css']
})
export class FineDetalisComponent implements OnInit {
  fineid: number=0;
  fine: Fine=new Fine(0,new Date(),0,0,0,0,0,0);
  

  constructor(private route: ActivatedRoute, private FineService: FineService){ }

  ngOnInit(): void {
    this.fineid = this.route.snapshot.params['id'];

    this.fine = new Fine(0,new Date(),0,0,0,0,0,0);
    this.FineService.getFineById(this.fineid).subscribe( data =>{
      this.fine = data;
    });
  }

}

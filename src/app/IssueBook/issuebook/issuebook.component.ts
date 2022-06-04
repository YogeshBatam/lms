// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Issuebook } from '../issuebook';
// import { IssuebookService } from '../issuebook.service';

// @Component({
//   selector: 'app-issuebook',
//   templateUrl: './issuebook.component.html',
//   styleUrls: ['./issuebook.component.css']
// })
// export class IssuebookComponent implements OnInit {
//   issuebookModel:Issuebook=new Issuebook();
//   issuebookService:IssuebookService;
 
//   constructor(issuebookService:IssuebookService) {
//     this.issuebookService = issuebookService;
//    }

//   ngOnInit(): void {
//   }
//   issuebook(){
//     this.issuebookService.addIssuebook(this.issuebookModel).subscribe(
//       (data) => { 
//           console.log(data);
//           alert('success');
//       },
//       (error) => {
//         console.log(error);
//           alert('something went wrong');
//       }
//     );
//   }


// }

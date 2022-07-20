import { Component, OnInit } from '@angular/core';

import { Tutorial } from '../_models/tutorial.model';
import { TutorialesService } from '../_services/tutoriales.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  // content?: string;

  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialesService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  ////////////////////////////////
  updateTutorial(): void {
    // this.message = '';

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          // this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }



































///9/07
  // tutoriales: any = {};
  // tutoriales:Array<any> = [];
  // constructor(private service: TutorialesService){ }

  // ngOnInit():void{
  //   this.service.getAllTutoriales().subscribe(resp =>{
  //     this.tutoriales = resp;
  //     console.log(this.tutoriales);
  //   });
  
  // }


//   content?: string;

//  constructor(private tutorialservice: TutorialesService) { } 

//   ngOnInit(): void {
//     this.tutorialservice.getAllTutoriales().subscribe(
//       data => {
//         this.content = data;
//       },
//       err => {
//         this.content = JSON.parse(err.error).message;
//       }
//     );
//   }
}

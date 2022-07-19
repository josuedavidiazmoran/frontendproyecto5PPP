import { Component, OnInit } from '@angular/core';

import { Tutorial } from '../_models/tutorial.model';
import { TutorialesService } from '../_services/tutoriales.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {


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

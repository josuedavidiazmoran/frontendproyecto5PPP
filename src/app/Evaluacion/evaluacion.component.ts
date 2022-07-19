import { Component, OnInit } from '@angular/core';

import { Evaluacion } from '../_models/evaluacion.model';
import { EvaluacionService } from '../_services/evaluacion.service';

import { PPP } from '../_models/PPP.model';

import { ActivatedRoute, Router } from '@angular/router';


@Component({

  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {
  evaluacion?: Evaluacion[];
  currentEvaluacion: Evaluacion = {};
  currentIndex = -1;
  title = '';


  ppps?: PPP[];
  currentPPP: PPP = {};
  // currentIndex = -1;
  // title = '';


  constructor(
    private evaluacionService: EvaluacionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveEvaluaciones(this.route.snapshot.params.id);
  }
  retrieveEvaluaciones(id:string): void {
    this.evaluacionService.findByIddd(id)
    // this.evaluacionService.getAll()
      .subscribe(
        data => {
          console.log(data);
          this.evaluacion = data;

          console.log("pasoooo");
          
        },
        error => {
          console.log("eeeeeeeeeeeeeeeeeeeeeeeee");
          console.log(error);
        });
  }

  searchEvaluacionporID(): void {
    // this.currentPPP = {};
    // this.currentIndex = -1;

    const iddd=6;

    this.evaluacionService.findByIddd(iddd)
      .subscribe(
        data => {
          this.evaluacion = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    // this.retrieveEvaluaciones();
    this.currentEvaluacion = {};
    this.currentIndex = -1;
  }

  setActivePPP(evaluacion: Evaluacion, index: number): void {
    this.currentEvaluacion = evaluacion;
    this.currentIndex = index;
  }

  // removeAllTutorials(): void {
  //   this.tutorialService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.refreshList();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // searchTitle(): void {
  //   this.currentPPP = {};
  //   this.currentIndex = -1;

  //   this.tutorialService.findByTitle(this.title)
  //     .subscribe(
  //       data => {
  //         this.tutorials = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  


  ////////////////////////////////
  updatePPP(): void {
    // this.message = '';

    this.evaluacionService.update(this.currentEvaluacion.id, this.currentEvaluacion)
      .subscribe(
        response => {
          console.log(response);
          // this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

}

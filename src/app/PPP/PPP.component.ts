import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
//con esto traigo datos de usuario, de otr forma, para usar su id del tutor
import { TokenStorageService } from '../_services/token-storage.service';

import { PPP } from '../_models/PPP.model';
import { PPPService } from '../_services/PPP.service';

@Component({

  selector: 'app-PPP',
  templateUrl: './PPP.component.html',
  styleUrls: ['./PPP.component.css']
})
export class PPPComponent implements OnInit {
  // content?: string;

  ppps?: PPP[];
  currentPPP: PPP = {};
  currentIndex = -1;
  title = '';
  

  currentUser: any;//contiene datos del usario, en este caso del tutor logeado


  constructor(
    private pppService: PPPService,
    private token: TokenStorageService) { }


  ngOnInit(): void {
    
    this.currentUser = this.token.getUser();//obtiene datos de usuario en este caso del tutor logeado
   
    this.retrievePpps();
  }
  //lista los PPPs asiganado al tutor logeado
  retrievePpps(): void {
    const po=this.currentUser.id;
    console.log("jjjjjjjjjjjjjjjjjjj"+po);
    const iddd=this.currentUser.id;//trae el id del usuario en este caso de tutor logeado
    this.pppService.findByIddd(iddd)
      .subscribe(
        data => {
          console.log(data);
          this.ppps = data;
        },
        error => {
          console.log(error);
        });
  }

  searchPPPporID(): void {
    // this.currentPPP = {};
    // this.currentIndex = -1;

    const iddd=6;

    this.pppService.findByIddd(iddd)
      .subscribe(
        data => {
          this.ppps = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePpps();
    this.currentPPP = {};
    this.currentIndex = -1;
  }

  setActivePPP(ppp: PPP, index: number): void {
    this.currentPPP = ppp;
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

    this.pppService.update(this.currentPPP.id, this.currentPPP)
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

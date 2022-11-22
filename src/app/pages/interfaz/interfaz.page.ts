import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.page.html',
  styleUrls: ['./interfaz.page.scss'],
})
export class InterfazPage implements OnInit {

  constructor(private router: Router, private fire: FirebaseService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){}

  login(){
    console.log("entrar")
    this.router.navigate(['login'])
  }

  registro(){
    console.log("registro")
    this.router.navigate(['register'])
  }

  info(){
    console.log("info")
    this.router.navigate(['info'])
  }

  fail(){
    console.log("error")
    this.router.navigate(['error'])
  }

  conductor(){
    console.log("conductor-viaje")
    this.router.navigate(['nviaje'])
  }

  pasajero(){
    console.log("pasajero-viaje")
    this.router.navigate(['pviajes'])
  }

  logout(){
    this.fire.logout();
    this.router.navigate(['home'])
  }

}

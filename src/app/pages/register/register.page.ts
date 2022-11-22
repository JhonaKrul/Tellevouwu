import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private fire: FirebaseService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){}

  async registrar(email, pass){
    const user = this.fire.registrar(email.value, pass.value);
    if (user){
  
    }
  
  }
  
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
  
  logout(){
    this.fire.logout();
    this.router.navigate(['home'])
  }


}

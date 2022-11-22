import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = null;
  mensaje: string

  constructor(private fire: FirebaseService, private router: Router, private route: ActivatedRoute, private alerta: AlertController, private auth: AngularFireAuth) { 

    this.auth.authState.subscribe((user) =>{
      this.user = user? user: null;
     });
  }


  ngOnInit() {
  }

  ionViewWillEnter(){}

  async login(email,pass){
    const user = this.fire.login(email.value,pass.value);
    if (user) {
      this.router.navigate(['interfaz'])
    } else {
      console.log("papure")
      const uwu = await this.alerta.create({    
        header: 'Error',
        subHeader: 'Credenciales incorrectas',
        message: 'Por favor verifique que los datos ingresados sean correctos',
        buttons: ['OK'],
      });
  
      await uwu.present();
    }
   }

   registro(){
    this.router.navigate(['register'])
   }
  
   recuperar(){
    this.router.navigate(['recuperar'])
   }
  
  
  google(){
    const user = this.fire.googleSignIn();
  
  }
  
  github(){
    const user = this.fire.github();
  }
  
  info(){
    console.log("info")
    this.router.navigate(['info'])
  }
  
  fail(){
    console.log("error")
    this.router.navigate(['error'])
  }

}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'interfaz',
    loadChildren: () => import('./pages/interfaz/interfaz.module').then( m => m.InterfazPageModule)
  },
  {
    path: 'nviaje',
    loadChildren: () => import('./pages/conductor/nviaje/nviaje.module').then( m => m.NviajePageModule)
  },
  {
    path: 'cperfil',
    loadChildren: () => import('./pages/conductor/cperfil/cperfil.module').then( m => m.CperfilPageModule)
  },
  {
    path: 'cviajes',
    loadChildren: () => import('./pages/conductor/cviajes/cviajes.module').then( m => m.CviajesPageModule)
  },
  {
    path: 'pperfil',
    loadChildren: () => import('./pages/pasajero/pperfil/pperfil.module').then( m => m.PperfilPageModule)
  },
  {
    path: 'pviajes',
    loadChildren: () => import('./pages/pasajero/pviajes/pviajes.module').then( m => m.PviajesPageModule)
  },
  {
    path: 'phistorial',
    loadChildren: () => import('./pages/pasajero/phistorial/phistorial.module').then( m => m.PhistorialPageModule)
  },
  {
    path: 'chistorial',
    loadChildren: () => import('./pages/conductor/chistorial/chistorial.module').then( m => m.ChistorialPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

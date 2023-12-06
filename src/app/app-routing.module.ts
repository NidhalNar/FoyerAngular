import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UserQRCodeComponent } from './user-qr-code/user-qr-code.component';
import { UniversitiesComponent } from './universities/universities.component';
import { FoyersComponent } from './foyers/foyers.component';
import { UpdateUniComponent } from './update-uni/update-uni.component';
import { UpdatefoyerComponent } from './updatefoyer/updatefoyer.component';
import { AuthGuard } from './Services/AuthGuard';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'adduser', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'updateuser/:id', component: UpdateuserComponent, canActivate: [AuthGuard] },
  { path: 'listuser', component: ListuserComponent, canActivate: [AuthGuard] },
  { path: 'user/:id/qr-code', component: UserQRCodeComponent, canActivate: [AuthGuard] },
  { path: 'universite', component: UniversitiesComponent},
  { path: 'foyer', component: FoyersComponent, canActivate: [AuthGuard] },
 //{ path: 'foyer', loadChildren: () => import('./foyers/foyers/foyers.module').then(m => m.FoyersModule), canActivate: [AuthGuard] },

  { path: 'updateuni/:id', component: UpdateUniComponent, canActivate: [AuthGuard] },
  { path: 'updatefoyer/:id', component: UpdatefoyerComponent, canActivate: [AuthGuard] },
  { path: 'Etudiant', data: { breadcrumb: 'Etudiant' }, loadChildren: () => import('../app/features/etudiant/etudiant.module').then(m=>m.EtudiantModule) },
  { path: '**', component: NotfoundComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }

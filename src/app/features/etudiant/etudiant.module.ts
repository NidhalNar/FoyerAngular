import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { ListEtudiantComponent } from 'src/app/list-etudiant/list-etudiant.component';




@NgModule({
  declarations: [  ListEtudiantComponent ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
   
  ]
})
export class EtudiantModule { }

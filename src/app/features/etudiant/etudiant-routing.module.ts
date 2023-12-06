import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEtudiantComponent } from 'src/app/list-etudiant/list-etudiant.component';
import { EtudiantComponent } from 'src/app/etudiant/etudiant.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
	{ path: 'add', component: EtudiantComponent },
	{ path: 'list', component: ListEtudiantComponent },
	
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule],
	exports: [RouterModule]
})
export class EtudiantRoutingModule { }

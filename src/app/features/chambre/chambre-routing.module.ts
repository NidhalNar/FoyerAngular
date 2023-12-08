import { UpdateChambreComponent } from './../../pages/update-chambre/update-chambre.component';
import { ListblocComponent } from './../../listbloc/listbloc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListchambreComponent } from 'src/app/listchambre/listchambre.component';
import { AddChambreComponent } from 'src/app/pages/add-chambre/add-chambre.component';

const routes: Routes = [
  {path:'listchambre',component:ListchambreComponent},
  {path:'addChambre', component:AddChambreComponent},
  { path: 'updateChambre/:id', component: UpdateChambreComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }

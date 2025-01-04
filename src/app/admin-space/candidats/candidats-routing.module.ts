import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatListComponent } from './liste-candidats/liste-candidats.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { CandidatEditComponent } from './edit-candidat/edit-candidat.component';

const routes: Routes = [
  {path:"", component: CandidatListComponent},
  {path:"add", component:AddCandidatComponent},
  {path:"edit/:id", component: AddCandidatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatsRoutingModule { }

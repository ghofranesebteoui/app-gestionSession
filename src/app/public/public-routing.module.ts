import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RechercheComponent } from './recherche/recherche.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'formations', component: RechercheComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'details', component: DetailsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
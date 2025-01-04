import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './public/acceuil/acceuil.component';
import { DetailsComponent } from './public/details/details.component';
import { RechercheComponent } from './public/recherche/recherche.component';

const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'recherche', component: RechercheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

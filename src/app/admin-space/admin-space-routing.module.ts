import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatListComponent } from './candidats/liste-candidats/liste-candidats.component';
import { AddCandidatComponent } from './candidats/add-candidat/add-candidat.component';
import { CandidatEditComponent } from './candidats/edit-candidat/edit-candidat.component';

const routes: Routes = [
  { path: 'candidats', loadChildren: () => import('./candidats/candidats.module').then(m => m.CandidatsModule) },
  { path: 'formateurs', loadChildren: () => import('./formateurs/formateurs.module').then(m => m.FormateursModule) },
  { path: 'formations', loadChildren: () => import('./formations/formations.module').then(m => m.FormationsModule) },
  { path: 'sessions', loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule) },
  { path: '', redirectTo: 'formations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSpaceRoutingModule {}

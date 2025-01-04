import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatsRoutingModule } from './candidats-routing.module';
import { CandidatListComponent } from './liste-candidats/liste-candidats.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { CandidatEditComponent } from './edit-candidat/edit-candidat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CandidatListComponent,
    AddCandidatComponent,
    AddCandidatComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CandidatsRoutingModule
  ]
})
export class CandidatsModule { }

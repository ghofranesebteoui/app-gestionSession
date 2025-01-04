import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsRoutingModule } from './formations-routing.module';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormationsRoutingModule
  ]
})
export class FormationsModule { }

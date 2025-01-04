import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailsComponent } from './details/details.component';
import { RechercheComponent } from './recherche/recherche.component';

@NgModule({
  declarations: [
    AcceuilComponent,
    DetailsComponent,
      
    RechercheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
     
    AcceuilComponent,
    DetailsComponent,
    RechercheComponent
  ]
})
export class PublicModule {}

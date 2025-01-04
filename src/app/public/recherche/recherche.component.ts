import { Component } from '@angular/core';
import { Formation } from '../../model/formation';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.css'
})
export class RechercheComponent {
searchQuery: any;
searchFormations() {
throw new Error('Method not implemented.');
}
  formations: Formation[] = [
    new Formation(1, 'Angular', 'Formation Angular', 40, '', 'débutant', ['Web'], ['Angular', 'Web']),
    new Formation(2, 'Python', 'Formation Python', 30, '', 'intermédiaire', ['Data'], ['Python', 'Data'])
  ];
  indice: string = '';
  get filteredFormations(): Formation[] {
    return this.formations.filter(f =>
      f.motsCles.some(mot => mot.toLowerCase().includes(this.indice.toLowerCase()))
    );
  }
}

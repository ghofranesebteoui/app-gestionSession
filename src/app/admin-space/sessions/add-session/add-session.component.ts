import { Component } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormationService } from '../../../services/formation.service';
import { CandidatService } from '../../../services/candidat.service';
import { FormateurService } from '../../../services/formateur.service';
import { Formation } from '../../../model/formation';
import { Formateur } from '../../../model/formateur';
import { Candidat } from '../../../model/candidat';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent {
  formations: Formation[] = [];
  formateurs: Formateur[] = [];
  candidats: Candidat[] = [];

  constructor(
    private sessionService: SessionService,
    private formationService: FormationService,
    private candidatService: CandidatService,
    private formateurService: FormateurService,
    private router: Router
  ) {
    this.formationService.getFormations().subscribe(formations => this.formations = formations);
    this.candidatService.getCandidats().subscribe(candidats => this.candidats = candidats);
    this.formateurService.getFormateurs().subscribe(formateurs => this.formateurs = formateurs);
  }

  addSession(f: NgForm) {
    const selectedFormation = this.formations.find(f => f.id === f.value._formation);
    const selectedFormateurs = this.formateurs.filter(f => f.value._formateurs.includes(f.id));
    const selectedCandidats = this.candidats.filter(c => f.value._candidats.includes(c.id));

    this.sessionService.addSession(
      f.value._dateDeb,
      f.value._dateFin,
      f.value._desc,
      selectedFormation,
      selectedFormateurs,
      selectedCandidats
    ).subscribe(
      session => this.router.navigate(['/sessions'])
    );
  }
}

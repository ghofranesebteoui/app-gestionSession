import { Component } from '@angular/core';
import { CandidatService } from '../../../services/candidat.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent {
  constructor(
    private candidatService: CandidatService,
    private router: Router
  ) {}

  addCandidat(f: NgForm) {
    const { nom, prenom, email, numCIN, photo, mdp } = f.value;
    this.candidatService.addCandidat(nom, prenom, email, numCIN, photo, mdp);
    this.router.navigate(["/admin-space/candidats"]);
  }
  
}

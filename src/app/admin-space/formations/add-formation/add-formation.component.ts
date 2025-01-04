import { Component } from '@angular/core';
import { FormationService } from '../../../services/formation.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent {
  constructor(
    private formationService: FormationService,
    private router: Router
  ) {}

  addFormation(f: NgForm) {
    this.formationService.addFormation(
      f.value._titre,
      f.value._desc,
      f.value._chargeHoraire,
      f.value._prog,
      f.value._nivDifficulte,
      f.value._motsCles.split(','),
      f.value._categories.split(',')
    ).subscribe(
      formation => this.router.navigate(['/formations'])
    );
  }
}

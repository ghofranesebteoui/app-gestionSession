import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../../../model/formation';
import { FormationService } from '../../../services/formation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formation-edit',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class FormationEditComponent implements OnInit {
  formation?: Formation;

  constructor(
    private activeRoute: ActivatedRoute,
    private formationService: FormationService,
    private router: Router
  ) {}

  editFormation(f: NgForm) {
    if (this.formation) {
      this.formationService.editFormation(this.formation).subscribe(
        () => this.router.navigate(['/formations'])
      );
    }
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parametres => {
      this.formationService.getFormationById(parametres['id']).subscribe(
        formation => this.formation = formation
      );
    });
  }
}

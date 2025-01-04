import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../../../model/formateur';
import { FormateurService } from '../../../services/formateur.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formateur-edit',
  templateUrl: './edit-formateur.component.html',
  styleUrls: ['./edit-formateur.component.css']
})
export class FormateurEditComponent implements OnInit {
  formateur?: Formateur;

  constructor(
    private activeRoute: ActivatedRoute,
    private formateurService: FormateurService,
    private router: Router
  ) {}

  editFormateur(f: NgForm) {
    this.formateurService.editFormateur(this.formateur!).subscribe(
      formateur => this.router.navigate(['/formateurs'])
    );
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parametres => {
      this.formateurService.getFormateurById(parametres['id']).subscribe(
        formateur => this.formateur = formateur
      );
    });
  }
}

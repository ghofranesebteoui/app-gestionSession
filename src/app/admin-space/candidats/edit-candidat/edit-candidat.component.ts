import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../../../model/candidat';
import { CandidatService } from '../../../services/candidat.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidat-edit',
  templateUrl: './edit-candidat.component.html',
  styleUrls: ['./edit-candidat.component.css']
})
export class CandidatEditComponent implements OnInit {
  candidat?: Candidat;

  constructor(
    private activeRoute: ActivatedRoute,
    private candidatService: CandidatService,
    private router: Router
  ) {}

  editCandidat(f: NgForm) {
    this.candidatService.editCandidat(this.candidat!);
    this.router.navigate(['/admin-space/candidats']);
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parametres => {
      this.candidatService.getCandidatById(parametres['id']).subscribe(
        candidat => this.candidat = candidat
      );
    });
  }
}

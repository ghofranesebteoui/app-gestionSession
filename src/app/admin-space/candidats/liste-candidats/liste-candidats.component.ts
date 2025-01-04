import { Component, OnInit, TrackByFunction } from '@angular/core';
import { CandidatService } from '../../../services/candidat.service';
import { Candidat } from '../../../model/candidat';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './liste-candidats.component.html',
  styleUrls: ['./liste-candidats.component.css']
})
export class CandidatListComponent implements OnInit {
  candidats?: Candidat[];

  constructor(private candidatService: CandidatService) {}

  deleteCandidat(id: number) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce candidat ?")) {
      this.candidatService.deleteCandidat(id.toString()).subscribe(
        () => {
          // Mise à jour de la liste après suppression
          this.candidats = this.candidats?.filter(c => c.id !== id);
        }
      );
    }
  }

  ngOnInit(): void {
    this.candidatService.getCandidats().subscribe(
      candidats => this.candidats = candidats
    );
  }

  trackById(index: number, candidat: Candidat): number {
    return candidat.id; 
  }
}

import { Component } from '@angular/core'; 
import { Formation } from '../../model/formation';
import { Candidat } from '../../model/candidat';
import { Session } from '../../model/session';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] 
})
export class DetailsComponent {
  formation: Formation = new Formation(1, 'Angular', 'Formation Angular avancée', 40, '', 'avancé', ['Web'], ['Angular', 'Développement']);

  sessions: Session[] = [
    new Session(1, new Date('2025-01-15'), new Date('2025-02-15'), 'Session 1 description', this.formation, [], [])
  ];

  inscrire(session: Session): void {
    if (session.candidats.length < 15) {
      const nouveauCandidat = new Candidat(1, 'Dupont', 'Jean', 'jean.dupont@example.com', '12345678', '', 'password');
      session.candidats.push(nouveauCandidat);
      alert('Inscription réussie!');
    } else {
      alert('La session est déjà complète.');
    }
  }
}

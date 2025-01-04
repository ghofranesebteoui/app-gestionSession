import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from '../../../model/session';
import { SessionService } from '../../../services/session.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-session-edit',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class SessionEditComponent implements OnInit {
  session?: Session;

  constructor(
    private activeRoute: ActivatedRoute,
    private sessionService: SessionService,
    private router: Router
  ) {}

  editSession(f: NgForm) {
    this.sessionService.editSession(this.session!).subscribe(
      session => this.router.navigate(['/sessions'])
    );
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parametres => {
      this.sessionService.getSessionById(parametres['id']).subscribe(
        session => this.session = session
      );
    });
  }
}

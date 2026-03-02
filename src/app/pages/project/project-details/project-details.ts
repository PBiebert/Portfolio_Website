import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from '../../../shared/services/project-service';
import { ImgReveal } from '../../../shared/directives/img-reveal';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Header } from '../../../shared/components/header/header';
import { Sticker } from '../../../shared/components/sticker/sticker';
import { TranslatePipe } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

/**
 * Komponente zur Anzeige der Projektdetails.
 * Holt die Projekt-ID aus der URL und zeigt die entsprechenden Daten an.
 * Ermöglicht das Navigieren zum nächsten Projekt.
 */
@Component({
  selector: 'app-project-details',
  imports: [ImgReveal, Header, RouterLink, TranslatePipe, Sticker],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails implements OnInit, OnDestroy {
  /**
   * Service für Projekt-Daten.
   */
  projectService = inject(ProjectService);

  /**
   * Die aktuelle Projekt-ID aus der URL.
   */
  urlID: string | null = null;

  /**
   * Subscription für das paramMap-Observable.
   */
  private routeSub?: Subscription;

  /**
   * Konstruktor injiziert ActivatedRoute und Router.
   * @param route ActivatedRoute zur Abfrage der URL-Parameter
   * @param router Router für Navigation
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  /**
   * Initialisiert die Komponente und abonniert die URL-Parameter.
   * Setzt die urlID entsprechend dem aktuellen Routen-Parameter.
   */
  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      this.urlID = params.get('id');
    });
  }

  /**
   * Wird beim Zerstören der Komponente aufgerufen.
   * Kündigt das paramMap-Subscription, um Speicherlecks zu vermeiden.
   */
  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  /**
   * Navigiert zum nächsten Projekt.
   * Aktualisiert die URL entsprechend der nächsten Projekt-ID.
   * Wenn das letzte Projekt erreicht ist, wird zum ersten Projekt navigiert.
   */
  nextProject() {
    let currentID = Number(this.urlID);
    let nextID = currentID < this.projectService.projects.length - 1 ? currentID + 1 : 0;
    this.router.navigate(['/single-project', nextID]);
  }
}

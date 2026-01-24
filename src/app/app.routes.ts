import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetails } from './pages/project/project-details/project-details';
import { Imprint } from './pages/imprint/imprint';
import { Privacy } from './pages/privacy/privacy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'single-project/:id', component: ProjectDetails },
  { path: 'imprint', component: Imprint },
  { path: 'privacy', component: Privacy },
];

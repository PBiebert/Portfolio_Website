import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetails } from './pages/project/project-details/project-details';
import { Imprint } from './pages/imprint/imprint';

export const routes: Routes = [
  { path: 'imprint', component: Home },
  { path: 'single-project', component: ProjectDetails },
  { path: '', component: Imprint },
];

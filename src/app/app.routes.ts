import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetails } from './pages/project/project-details/project-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'single-project', component: ProjectDetails },
];

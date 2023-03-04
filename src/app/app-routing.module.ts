import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import { TableauComponent } from './tableau/tableau.component';
import { PythonComponent } from './python/python.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tableau', component: TableauComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'python', component: PythonComponent },
  { path: 'resume', component: ResumeComponent }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

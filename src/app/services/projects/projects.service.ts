import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProject, IProjectIdAndImage} from '../../types/project';
import {commissionProjectsApi, projectsApi, weddingProjectsApi} from '../apis';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(projectsApi);
  }

  getProjectById(projectId: number): Observable<IProject> {
    return this.http.get<IProject>(`${projectsApi}/${projectId}`);
  }

  getWeddingProjects(): Observable<IProjectIdAndImage[]> {
    return this.http.get<IProjectIdAndImage[]>(weddingProjectsApi);
  }

  getCommissionProjects(): Observable<IProjectIdAndImage[]> {
    return this.http.get<IProjectIdAndImage[]>(commissionProjectsApi);
  }

}

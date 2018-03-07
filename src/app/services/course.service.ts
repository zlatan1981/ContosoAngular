import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from '../models/course';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

  @Injectable()
  export class CourseService {

    constructor(private http: HttpClient) { }

    getAllCourses(path: string): Observable<Course[]> {
        return this.http.get(`${environment.APIurl}${path}`)
        .map( response => response as Course[]  )
        .catch(this.handleError);

    }
    private handleError(err: HttpErrorResponse) {
      console.log(err.message + err.status);
      return Observable.throw(err.message);
    }
  }

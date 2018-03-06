import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './components/department/department.component';
import { CourseComponent } from './components/course/course.component';
import { StudentComponent } from './components/student/student.component';
import { PersonComponent } from './components/person/person.component';
import { InstructorComponent } from './components/instructor/instructor.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    CourseComponent,
    StudentComponent,
    PersonComponent,
    InstructorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

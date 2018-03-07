import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[];
  constructor(private courseService: CourseService)  {

    this.courseService.getAllCourses('/courses').subscribe(
      (data) => {
        this.courses = data;
        console.log('api successfully called!');
        console.table(this.courses);
      });
  }
  hideImg = true;
  toggleImg(): void {
    this.hideImg = !this.hideImg;
  }

  ngOnInit() {
  }
  // getAllCourses(): Course[] {
  //   return [
  //     {
  //       id : 1,
  //       name : 'Database',
  //       credits: 4,
  //       departmentName: 'CS',
  //       imageUrl: 'https://www.angularconnect.com/workspace/2015/img/resources/angular.png'
  //     },
  //     {
  //       id : 2,
  //       name : 'Database2',
  //       credits: 4,
  //       departmentName: 'CS',
  //       imageUrl: 'https://www.angularconnect.com/workspace/2015/img/resources/angular.png'
  //     },
  //     {
  //       id : 3,
  //       name : 'Database3',
  //       credits: 4,
  //       departmentName: 'CS',
  //       imageUrl: 'https://www.angularconnect.com/workspace/2015/img/resources/angular.png'
  //     },
  //     {
  //       id : 4,
  //       name : 'Database4',
  //       credits: 4,
  //       departmentName: 'CS',
  //       imageUrl: 'https://www.angularconnect.com/workspace/2015/img/resources/angular.png'
  //     }

  //   ];
  // }
}

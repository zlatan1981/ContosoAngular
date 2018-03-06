import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[];
  constructor() { }

  ngOnInit() {
  }
  getAllCourses(): Course[] {
    return [
      {
        id : 1,
        name : 'Database',
        credits: 4,
        departmentName: 'CS',
        imageUrl:' '
      },
      {
        id : 2,
        name : 'Database2',
        credits: 4,
        departmentName: 'CS'
      },
      {
        id : 3,
        name : 'Database3',
        credits: 4,
        departmentName: 'CS'
      },
      {
        id : 4,
        name : 'Database4',
        credits: 4,
        departmentName: 'CS'
      }

    ];
  }
}

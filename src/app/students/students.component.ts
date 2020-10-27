import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit{

  students: Student[];

  ngOnInit(): void {
    this.students = [
      {id: 1, name: 'xiao', age: 16},
      {id: 2, name: 'zhao', age: 17},
      {id: 3, name: 'wang', age: 18},
      {id: 4, name: 'li', age: 19}
    ];
  }
}

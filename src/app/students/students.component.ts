import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {StudentsService} from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit{

  students: Student[];

  constructor(private studentsService: StudentsService) {
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentsService.getStudents()
      .subscribe(students => this.students = students);
  }
}

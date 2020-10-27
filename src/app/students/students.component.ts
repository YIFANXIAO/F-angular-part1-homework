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

  }
}

import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Student} from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService{

  students: Student[] = [
    {id: 1, name: 'xiao', age: 16},
    {id: 2, name: 'zhao', age: 17},
    {id: 3, name: 'wang', age: 18},
    {id: 4, name: 'li', age: 19}
  ];

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }
}

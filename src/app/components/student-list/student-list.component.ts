import { Component, Input, OnInit } from '@angular/core';
import { Studente } from 'src/app/models/studente';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() studente?: Studente;

  constructor() { }

  ngOnInit(): void {
  }

}

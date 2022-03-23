import { Component, OnInit } from '@angular/core';
import { Studente } from 'src/app/models/studente';
import { STUDENTI } from '../mock/mock-studenti';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.scss']
})
export class StudenteComponent implements OnInit {
studenti: Studente[] = STUDENTI;
selectStudente?: Studente;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(studente: Studente){
    this.selectStudente = studente;
  }

}

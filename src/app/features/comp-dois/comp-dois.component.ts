import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-comp-dois',
  templateUrl: './comp-dois.component.html',
  styleUrls: ['./comp-dois.component.css']
})
export class CompDoisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.criarSegundoObservable();
  }
  criarSegundoObservable () {
    Observable.create();
  }

}

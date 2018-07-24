import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-comp-um',
  templateUrl: './comp-um.component.html',
  styleUrls: ['./comp-um.component.css']
})
export class CompUmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.criarPrimeiroObservable();
  }

  criarPrimeiroObservable () {
    Observable.create();

  }

}

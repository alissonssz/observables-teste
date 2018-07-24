import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-comp-dois',
  templateUrl: './comp-dois.component.html',
  styleUrls: ['./comp-dois.component.css']
})
export class CompDoisComponent implements OnInit, OnDestroy {
  subSegundoObservable: Subscription;
  constructor() { }

  ngOnInit() {
    this.criarSegundoObservable();
  }
  criarSegundoObservable () {
    this.subSegundoObservable =  Observable.create((observer: Observer<boolean>) => {
      observer.next(true);
    });
  }

  ngOnDestroy(): void {
    this.subSegundoObservable.unsubscribe();
  }

}

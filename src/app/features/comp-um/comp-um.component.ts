import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-comp-um',
  templateUrl: './comp-um.component.html',
  styleUrls: ['./comp-um.component.css']
})
export class CompUmComponent implements OnInit, OnDestroy {
  
  subPrimeiroObservable: Subscription;
  constructor() { }

  ngOnInit() {
    this.criarPrimeiroObservable();
  }

  criarPrimeiroObservable () {
    this.subPrimeiroObservable =  Observable.create((observer: Observer<boolean>) => {
      observer.next(true);
    });
  }
  ngOnDestroy(): void {
    this.subPrimeiroObservable.unsubscribe();
  }

}

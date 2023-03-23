import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  currentNavigation$ = new ReplaySubject<boolean>();

  private router = inject(Router);

  ngOnInit(): void {
    this.currentNavigation$.next(!!this.router.getCurrentNavigation());
  }
}

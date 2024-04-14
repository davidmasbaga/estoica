import { Injectable, OnDestroy } from '@angular/core';

import { ApiService } from './api.service';
import { BehaviorSubject, Observable, Subject, take, takeUntil } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ApiManagementService implements OnDestroy {
  media$: Observable<any[]>;

  private _media: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private mediaDataService: ApiService) {
    this.media$ = this._media.asObservable();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getMedia() {
    this.mediaDataService.getMedia()
    .pipe(
      take(1),
      takeUntil(this.destroy$)
    ).subscribe(
      res=> this.media = res
    )
  }


  get media(){
    return this._media.getValue()
  }

  set media(media:any[]){
    this._media.next(media)
  }
}

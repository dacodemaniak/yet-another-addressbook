import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public signin(): void {
    this.isLoggedIn$.next(!this.isLoggedIn$.getValue());
  }

  public isLoggedIn(): BehaviorSubject<boolean> {
    return this.isLoggedIn$;
  }
}

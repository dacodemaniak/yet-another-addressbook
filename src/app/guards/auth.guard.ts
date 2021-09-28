import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from '../services/signin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public constructor(
    private signinService: SigninService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authorizedRouting: boolean =  this.signinService.isLoggedIn().getValue();

    if (!authorizedRouting) {
      // Do a stuff here... Route to another route (401 page)
      //this.router.navigate(['']);
    }

    return authorizedRouting;
  }
  
}

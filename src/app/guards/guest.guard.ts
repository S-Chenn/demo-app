import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { User } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.afAuth.authState.pipe(
      map((afUser: User | null) => {
        if(!afUser){
          return true;
        } else {
          this.router.navigateByUrl('/');
          return false;
        }
      })
    );
  }
}

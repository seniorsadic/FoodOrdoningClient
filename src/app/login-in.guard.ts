/* tslint:disble max-line-length */
import { Injectable } from '@angular/core';
import {
 CanActivate,
 ActivatedRouteSnapshot,
 RouterStateSnapshot
 } from '@angular/router';
import { AuthentificationService } from '../servives/auhentification.services';
import { Observable } from '../../node_modules/rxjs';

 @Injectable()
 export class LoggedInGuard implements CanActivate {
    
    constructor(private authService: AuthentificationService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            const isLoggedIn = this.authService.isconnect();
            console.log('canActivate', isLoggedIn);
            return isLoggedIn;
    }
}

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    // provide current route info ( we can use this to get the id from the url )
    route: ActivatedRouteSnapshot,
    // provide route state info
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // use route to get the url parameter for id
    const id = Number(route.paramMap.get('id'));
    if (isNaN(id) || id < 1) {
      alert('invalid product id');
      // redirect back to product list
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}

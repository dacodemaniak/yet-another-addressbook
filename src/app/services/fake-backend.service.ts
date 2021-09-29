import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
import { AddressModel } from '../models/address-model';

const users: any[] = localStorage.getItem('users') ?
  JSON.parse(localStorage.getItem('users')!) :
  [];

const router: Map<string, {path: RegExp, method: string, action: any}> = new Map()
  .set(
    'all',
    {
      path: /\api\/v1\/user$/,
      method: 'GET',
      action: (): Observable<HttpResponse<any>> => {
        if (users.length) {
          return of(new HttpResponse<any>({
            status: 200,
            body: users
          }))
        } else {
          return of(new HttpResponse<any>({
            status: 404,
            body: []
          }));
        }
      }
    }
  )
  .set(
    'add',
    {
      path: /\api\/v1\/user$/,
      method: 'POST',
      action: (body: AddressModel): Observable<HttpResponse<any>> => {
        let nextId: number = 1;
        if (users.length) {
          nextId = users.sort((u1: AddressModel, u2: AddressModel) => u2.id - u1.id)[0].id + 1;
        }
        body.id = nextId;
        users.push(body);
        localStorage.setItem('users', JSON.stringify(users));
        return of(
          new HttpResponse({
            status: 201,
            body
          })
        )
      }
    }
  )
@Injectable({
  providedIn: 'root'
})
class FakeBackendService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body} = req;

    console.log(`Intercept ${url} with ${method}`);

    const handleRoute = (): Observable<HttpEvent<any>> => {
      const routes: {path: RegExp, method: string, action: any}[] = [...router.values()];

      for (const route of routes) {
        if (route.path.test(url) && route.method === method) {
          return route.action(body);
        }
      }

      return next.handle(req);
    }

    // Only for fakebackend !!!
    return of(null)
      .pipe(
        mergeMap(handleRoute),
        materialize(),
        delay(500),
        dematerialize()
      );
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendService,
  multi: true
}

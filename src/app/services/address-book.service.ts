import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AddressDto } from '../models/address-dto';
import { AddressModel } from '../models/address-model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  
  private _itemCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private _persons: AddressModel[] = [];
  constructor(
    private httpClient: HttpClient
  ) {}

  public get itemCount(): BehaviorSubject<number> {
    return this._itemCount$;
  }

  /**
   * Returns all AddressModel
   * @returns AddressModel[]
   */
  public all(): Observable<AddressModel[]> {
    return this.httpClient.get<any[]>(
      `${environment.api}user`
    )
    .pipe(
      take(1),
      map((users: any[]) => {
        return users.map((user: any) => new AddressModel().deserialize(user))
      })
    );
  }

  public one(id: number): AddressModel | undefined {
    return this._persons.find((obj: AddressModel) => obj.id === id);
  }

  public persist(address: AddressModel): Observable<HttpResponse<any>> {
    if (address.id === undefined) {
      return this.add(address);
    }
    return this.update(address);

  }

  private add(person: AddressModel): Observable<HttpResponse<any>> {
    return this.httpClient.post<AddressModel>(
      `${environment.api}user`,
      person,
      {
        observe: 'response'
      }
    )
    .pipe(
      tap(() => this._itemCount$.next(this._itemCount$.getValue() + 1))
    );
  }

  /**
   * 
   * @param person AddressModel
   * @returns AddressBookService
   */
  private update(person: AddressModel): Observable<HttpResponse<any>> {
    return this.httpClient.patch<AddressModel>(
      `${environment.api}user`,
      person,
      { 
        observe: 'response'
      }
    );
  }

  public delete(person: AddressModel): AddressBookService {
    this._persons.splice(
      this._persons.findIndex((obj: AddressModel) => obj.id === person.id),
      1
    );
    this._itemCount$.next(this._persons.length);
    return this;
  }

  /**
   * Je ne sais pas à quoi ça sert mais je le laisse au cas où
   * Keep It Simple and Stupid
   */
  private _populate(): void {
    this._persons.push(
      new AddressModel().deserialize({
        _id: 1,
        _lastname: 'Aubert',
        _firstname: 'Jean-Luc',
        _birthdate: new Date(1968, 3, 30)
      })
    );

    this._persons.push(
      new AddressModel().deserialize({
        _id: 2,
        _lastname: 'Bond',
        _firstname: 'James',
        _birthdate: new Date(1935, 6, 30)
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddressModel } from '../models/address-model';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private _persons: AddressModel[] = [];
  private _itemCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    console.log(`Hey, i'm the AddressBookService`);
    this._populate();
    this._itemCount$.next(this._persons.length);
  }

  public get itemCount(): BehaviorSubject<number> {
    return this._itemCount$;
  }

  public all(): AddressModel[] {
    return this._persons;
  }

  public one(id: number): AddressModel | undefined {
    return this._persons.find((obj: AddressModel) => obj.id === id);
  }

  public add(person: any): AddressBookService {
    this._persons.push(person);
    this._itemCount$.next(this._persons.length);
    return this;
  }

  public update(person: AddressModel): AddressBookService {
    this._persons.splice(
      this._persons.findIndex((obj: AddressModel) => obj.id === person.id),
      1,
      person
    );

    return this;
  }

  public delete(person: AddressModel): AddressBookService {
    this._persons.splice(
      this._persons.findIndex((obj: AddressModel) => obj.id === person.id),
      1
    );
    this._itemCount$.next(this._persons.length);
    return this;
  }

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
        _id: 1,
        _lastname: 'Bond',
        _firstname: 'James',
        _birthdate: new Date(1935, 6, 30)
      })
    );
  }
}

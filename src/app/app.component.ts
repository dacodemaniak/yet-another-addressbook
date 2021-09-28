import { Component } from '@angular/core';
import { AddressBookService } from './services/address-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = `Carnet d'adresses`;

  public counter: number = 0;

  public persons: string[] = [
    'Jean-Luc',
    'Jérôme',
    'Krim',
    'Morgan',
  ];

  public constructor(
    private addressBookService: AddressBookService
  ) {}

  public increment(): void {
    this.counter++;
  }
}

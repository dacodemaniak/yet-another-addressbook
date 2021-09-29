import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddressBookService } from './services/address-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = `Carnet d'adresses`;


  public constructor(
    private addressBookService: AddressBookService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get<any>(
        'http://worldclockapi.com/api/json/utc/now'
      )
      .subscribe((utc: any) => {
        console.log(utc);
      });
  }

}

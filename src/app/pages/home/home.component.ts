import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AddressModel } from 'src/app/models/address-model';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public persons: AddressModel[] = [];

  constructor(
    private addressBookService: AddressBookService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.addressBookService.all()
      .pipe(
        take(1)
      )
      .subscribe((addresses: AddressModel[]) => {
        this.persons = addresses;
      });
  }
}

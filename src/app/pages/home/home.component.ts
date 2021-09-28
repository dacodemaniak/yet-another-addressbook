import { Component, OnInit } from '@angular/core';
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
    private addressBookService: AddressBookService
  ) {}

  ngOnInit(): void {
    this.persons = this.addressBookService.all();
  }
}

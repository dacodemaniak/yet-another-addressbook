import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressModel } from 'src/app/models/address-model';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
  selector: 'app-address-tile',
  templateUrl: './address-tile.component.html',
  styleUrls: ['./address-tile.component.scss']
})
export class AddressTileComponent implements OnInit {
  @Input() public person!: AddressModel;

  constructor(
    private addressBookService: AddressBookService
  ) { }

  ngOnInit(): void {
  }

  public remove(): void {
    this.addressBookService.delete(this.person);
  }

}

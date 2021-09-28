import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
    private addressBookService: AddressBookService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public remove(): void {
    this.addressBookService.delete(this.person);
  }

  public update(): void {
    this.router.navigate(['update', this.person.id])
  }
}

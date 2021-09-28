import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public itemNumber: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private service: AddressBookService
  ) { }

  ngOnInit(): void {
    this.itemNumber = this.service.itemCount;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AddressDto } from 'src/app/models/address-dto';
import { AddressInterface } from 'src/app/models/address-interface';
import { AddressModel } from 'src/app/models/address-model';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
  selector: 'app-address-manager',
  templateUrl: './address-manager.component.html',
  styleUrls: ['./address-manager.component.scss']
})
export class AddressManagerComponent implements OnInit {
  public form!: FormGroup;
  private addressModel: AddressModel | undefined = new AddressModel();

  constructor(
    private route: ActivatedRoute,
    private addressService: AddressBookService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params?.id) {
        this.addressModel = this.addressService.one(+params?.id);
        this._makeForm(true);
      } else {
        this._makeForm();
      }
    });
  }

  public onSubmit(formDatas: AddressInterface) {
    const dto: AddressDto = new AddressDto();
    this.addressService.persist(dto.transform(formDatas));
  }

  private _makeForm(...args: any[] ): void {
    this.form = new FormGroup({});

    let control: FormControl = new FormControl();
    control.setValidators([
      Validators.required,
      Validators.minLength(3)
    ]);
    // @todo replace with model content
    control = new FormControl();
    control.setValue(this.addressModel?.lastname);
    this.form.addControl('lastname', control);

    control = new FormControl();
    control.clearValidators();
    control.setValue(this.addressModel?.firstname);
    this.form.addControl('firstname', control);

    control = new FormControl();
    control.setValidators([
      Validators.required
    ]);
    control.setValue(this.addressModel?.birthdate);
    this.form.addControl('birthdate', control);

    // What about the id ?
    if (args.length) {
      control = new FormControl();
      control.clearValidators();
      control.setValue(this.addressModel?.id);
      this.form.addControl('id', control);

    }
  }
}

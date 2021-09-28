import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AddressModel } from 'src/app/models/address-model';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent implements OnInit {
  public form!: FormGroup;

  private person!: AddressModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private addressService: AddressBookService
  ) { }

  public get c(): { [key: string]:AbstractControl } {
    return this.form.controls;
  }

  public onSubmit(): void {

  }
  
  ngOnInit(): void {
    // But how do i get those fck id ?
    this.route.params.subscribe((routeParams: Params) => {
      this.person = this.addressService.one(+routeParams.id);
      if (this.person !== undefined) {
        this._doForm();
      } else {
        // Well, says we cannot load a ghost person !
      }
    });
  }

  private _doForm(): void {
    this.form = this.formBuilder.group({
      firstname: [
        this.person?.firstname
      ],
      lastname: [
        this.person?.lastname,
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      birthdate: [
        this.person?.birthdate,
        Validators.required
      ]
    });
  }

}

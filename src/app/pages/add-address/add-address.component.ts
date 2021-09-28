import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressDto } from 'src/app/models/address-dto';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AddressBookService,
    private router: Router
  ) { }

  public get c(): {[key: string]: AbstractControl} {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: [
        ''
      ],
      lastname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      birthdate: [
        new Date(),
        Validators.required
      ]
    });
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const dto: AddressDto = new AddressDto();
      this.service.add(dto.transform(this.form.value));

      this.router.navigate(['home']);

    }
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { AddressInterface } from 'src/app/models/address-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() public form!: FormGroup;
  @Output() formValue: EventEmitter<AddressInterface> = new EventEmitter<AddressInterface>();

  constructor() { }

  public get c(): {[key: string]: AbstractControl} {
    return this.form.controls;
  }

  ngOnInit(): void {
  }

  public getTitle(): string {
    if (this.c.id) {
      return 'Mettre à jour';
    }
    return 'Ajouter';
  }

  public onSubmit(): void {
    // My stuff must be little bit more complicated
    if (this.form.valid) {
      this.formValue.emit(this.form.value);
    }
  }
}

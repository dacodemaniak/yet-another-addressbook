import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { AddressTileComponent } from './pages/home/components/address-tile/address-tile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAddressComponent } from './pages/add-address/add-address.component';
import { RouterModule } from '@angular/router';
import { UpdateAddressComponent } from './pages/update-address/update-address.component';
import { AddressFormComponent } from './pages/forms/address-form/address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddressTileComponent,
    AddAddressComponent,
    UpdateAddressComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

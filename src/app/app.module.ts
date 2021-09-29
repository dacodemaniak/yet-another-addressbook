import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { AddressTileComponent } from './pages/home/components/address-tile/address-tile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressFormComponent } from './pages/forms/address-form/address-form.component';
import { AddressManagerComponent } from './pages/address-manager/address-manager.component';
import { FormComponent } from './pages/address-manager/components/form/form.component';
import { fakeBackendProvider } from './services/fake-backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddressTileComponent,
    AddressFormComponent,
    AddressManagerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

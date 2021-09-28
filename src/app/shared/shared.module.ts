import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UiModule } from './ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignComponent } from './components/sign/sign.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SignComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UiModule,
    ReactiveFormsModule,
    
  ]
})
export class SharedModule { }

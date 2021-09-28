import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UiModule } from './ui/ui.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UiModule
  ]
})
export class SharedModule { }

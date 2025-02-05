import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './section/header/header.component';
import { OptionButtonComponent } from './component/option-button/option-button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    OptionButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    OptionButtonComponent

  ]
})
export class CoreModule { }

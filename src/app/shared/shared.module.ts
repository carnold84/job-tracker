import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

import { ButtonComponent } from './components/button/button.component';
import { StatusIconComponent } from './components/status-icon/status-icon.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { StatusPickerComponent } from './components/status-picker/status-picker.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    ButtonComponent,
    DialogComponent,
    StatusIconComponent,
    StatusPickerComponent,
    TextFieldComponent
  ],
  exports: [
    AppHeaderComponent,
    ButtonComponent,
    DialogComponent,
    StatusIconComponent,
    StatusPickerComponent,
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ClickOutsideModule
  ]
})
export class SharedModule { }

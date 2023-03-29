import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandardButtonComponent } from './Component/ui/standard-button/standard-button.component';
import { StandardDropdownComponent } from './Component/ui/standard-dropdown/standard-dropdown.component';
import { StandardParagraphInputComponent } from './Component/ui/standard-paragraph-input/standard-paragraph-input.component';
import { TableStudentsComponent } from './Component/widgets/table-students/table-students.component';
import { ConnectionManagerComponent } from './Component/database/connection-manager/connection-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    StandardButtonComponent,
    StandardDropdownComponent,
    StandardParagraphInputComponent,
    TableStudentsComponent,
    ConnectionManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MyDialogComponent } from "./my-dialog/my-dialog.component";
import { MaterialModule } from "./material/material.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, MyDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  entryComponents: [MyDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

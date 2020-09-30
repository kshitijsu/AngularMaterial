import { Component } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MyDialogComponent } from "./my-dialog/my-dialog.component";

export interface DialogData {
  name: string;
  city: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name: string = "Rahul";
  city: string = "Agra";
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      name: this.name,
      city: this.city,
    };
    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      console.log("Result: " + result);
      this.name = result.name;
      this.city = result.city;
    });
  }
}

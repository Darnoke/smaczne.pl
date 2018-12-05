import { Component, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MatDialogRef, MatDialog } from '@angular/material';
import { MaterialModule } from './material-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smaczne.pl';

  constructor(private bottomSheet: MatBottomSheet, public dialog: MatDialog) { }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewhomeButt);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewOrder);
  }
}

@Component({
  selector: 'bottom-sheet-overview-homeButt',
  templateUrl: 'bottom-sheet-overview-homeButt.html',
  styleUrls: ['./app.component.css']
})
export class BottomSheetOverviewhomeButt {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewhomeButt>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'dialog-overview-order',
  templateUrl: 'dialog-overview-order.html',
})
export class DialogOverviewOrder {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewOrder>) {}

  onClick(): void {
    this.dialogRef.close();
  }

  openLink(event: MouseEvent): void {
    this.dialogRef.close();
    event.preventDefault();
  }

}


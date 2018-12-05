import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent, BottomSheetOverviewhomeButt, DialogOverviewOrder } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatBottomSheet, MatBottomSheetRef, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MaterialModule } from './material-module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewOrder,
    BottomSheetOverviewhomeButt
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    MaterialModule
  ],
  entryComponents: [AppComponent, DialogOverviewOrder, BottomSheetOverviewhomeButt],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


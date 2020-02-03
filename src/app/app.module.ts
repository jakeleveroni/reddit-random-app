import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import { UtilService } from './services/util.service';

@NgModule({
  declarations: [
    AppComponent,
    LoadingDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    UtilService
  ],
  entryComponents: [
    LoadingDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

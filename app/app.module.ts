import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DownloadComponent} from './download.component';
import { AppComponent } from './app.component';
import { CoursesService} from './courses.service';
import { SearchComponent} from './search.component';
import { SearchService } from './search.service';
import {UploadComponent} from './upload.component';
import { FileSelectDirective, FileDropDirective} from 'ng2-file-upload';
import {DashboardComponent} from './dashboard.component';
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdTableModule} from '@angular/material';
import {MdAutocompleteModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UploadComponent,
    FileSelectDirective,
    FileDropDirective,
    DashboardComponent,
    DownloadComponent
    
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdInputModule,
    MdSelectModule,
    MdTableModule,
    MdAutocompleteModule,
    MdIconModule,
    MdListModule
],
  exports:[MdButtonModule, MdInputModule, MdToolbarModule, MdSelectModule, MdTableModule,MdAutocompleteModule,MdIconModule,MdListModule], 
  providers: [CoursesService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

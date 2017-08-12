import { Component } from '@angular/core';
import {FILES} from './files';
import {DownloadComponent} from './download.component';
import {MdIconModule} from '@angular/material';
import {MdListModule} from '@angular/material';

 
 @Component({
    selector: 'dashboard',
    templateUrl: './database.component.html',
    styleUrls:['./databasestyle.css']

  })

 export class DashboardComponent {
     files=FILES;
    selectedFile: File;
    
     onSelect(file: File): void {
        this.selectedFile = file;
    }
     
 }
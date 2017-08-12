import { Component, Input } from '@angular/core';
import { File } from './file';

@Component({
    selector: 'download',
    template: `<div *ngIf="file">{{file.name}} has been downloaded
          
    </div>`
})
export class DownloadComponent {
        @Input() file: File;

}
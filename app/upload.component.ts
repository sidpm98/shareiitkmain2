import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {Filetypes} from './filetypes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CoursesService} from './courses.service';
import {uploadValidators} from './uploadValidators';
import {SearchService} from './search.service';
import {MdSelectModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdTableModule} from '@angular/material';
import {MdAutocompleteModule} from '@angular/material';


import {Semester} from './semester';
// const URL = '/api/';
  const URL = 'http://localhost:8082/resources/upload';

 
 
@Component({
  selector: 'upload',
  templateUrl: './upload.html',
  styleUrls: ['./app.component.css']
})
export class UploadComponent {
  
  uploadForm: FormGroup;
  courses = [];
  filetypes: string[] = Filetypes;
  semesters: string[]=Semester;

  constructor (private coursesService: CoursesService, fb: FormBuilder, private searchservice: SearchService) {

    this.uploadForm=fb.group({
            department:['',Validators.compose([Validators.required,uploadValidators.invalidDepartment])],
            course:['',Validators.compose([Validators.required,uploadValidators.invalidCourse])],
            filetype:['',Validators.compose([Validators.required,uploadValidators.invalidType])],
            semester:['',Validators.compose([Validators.required,uploadValidators.invalidSemester])],
            session:['',Validators.compose([Validators.required,uploadValidators.invalidSession])]
    })
       coursesService.getCourses().subscribe(courses => {this.courses = courses});
  }

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

 
            
}
    


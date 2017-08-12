import {FormControl} from '@angular/forms';
import {Courses} from './courses';

export class uploadValidators {
    static invalidDepartment(control: FormControl) {
        var department = control.value;

        if(Courses.indexOf(department)==-1 || department=='Select Department')
            return { invalidCourse: true };
        
        return null;
    }

    static invalidType(control: FormControl) {
        var type = control.value;

        if(type=='Select Filetype')
            return { invalidType: true };

        return null;
    }

    static invalidSemester(control: FormControl) {
        var semester = control.value;

        if(semester=='Select Semester')
            return { invalidSemester: true };

        return null;
    }

    static invalidSession(control: FormControl) {
        var session = control.value;

        if(session=='Session, eg-2016-17')
            return { invalidSemester: true };

        return null;
    }
    static invalidCourse(control: FormControl) {
        var course = control.value;

        if(course=='Course Code, eg-101 or 201')
            return { invalidSemester: true };

        return null;
    }

}
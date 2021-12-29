import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private student:StudentsService) { }
  addStudent= new FormGroup({
    first_name: new FormControl(''),
    last_name:new FormControl(''),
    email: new FormControl('')
  
  });
  
  message: boolean=false;
    ngOnInit(): void { 
    }
  SaveData(){ 
    //console.log(this.addStudent.value);
    this.student.saveStudentData(this.addStudent.value).subscribe((result)=>{
      //console.log(result);
      this.message=true;
      this.addStudent.reset({});
    });
  }
  removeMessage(){
    this.message=false;
  }

}

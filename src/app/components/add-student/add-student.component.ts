import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }
addStudent= new FormGroup({
  first_name: new FormControl(''),
  last_name:new FormControl(''),
  email: new FormControl('')

});

  ngOnInit(): void {
  }
SaveData(){
  console.log(this.addStudent.value);
}
}

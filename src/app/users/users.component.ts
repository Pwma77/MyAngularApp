import { Component, OnInit } from '@angular/core';
//add an import for dynamic forms, not simple ones
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
//then, it is called in the constructor
//I had to import them to app.module.ts, or maybe not...

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //import and inherit
  userForm!: FormGroup;

  constructor(

    public formBuilder:FormBuilder

  ) { }

  ngOnInit(): void {
    //value to the form
    this.userForm = this.formBuilder.group({
      //model of our userform
      //cuz of the alerts and users content
      fullname:new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),//with an array as validators
      mail:new FormControl('', [Validators.required, Validators.minLength(8)]),
      school:new FormControl('', [Validators.required]),
      telephone:new FormControl('')
    })
  }

  //extra func
  get getControl(){
    return this.userForm.controls;//to return the controls
  }

}

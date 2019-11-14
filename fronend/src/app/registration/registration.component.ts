import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('',
      [Validators.required, Validators.minLength(4)]),
    surname: new FormControl('',
      [Validators.required, Validators.minLength(1)]),
    email: new FormControl('',
      [Validators.required, Validators.minLength(1), Validators.email]),
    pass: new FormControl('',
      [Validators.required, Validators.minLength(6)]),
    repeatPass: new FormControl('',
      [Validators.required, Validators.minLength(6)]),
  });
  constructor() { }

  ngOnInit() {
  }

}

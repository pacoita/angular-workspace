import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { RegistrationForm } from './model/registration.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Workspace';

  readonly usernameMinLength = 5;

  registrationForm!: FormGroup<RegistrationForm>;

  
  get username() {
    return this.registrationForm.get('username');
  }
  
  constructor(private fb: NonNullableFormBuilder) { }
  
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(this.usernameMinLength)]],
      email: ''
    });
  }

  register() {
    if (this.registrationForm.valid) {
      console.log(this, this.registrationForm.value);
    }
  }
}

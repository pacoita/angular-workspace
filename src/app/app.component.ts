import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { RegistrationForm } from './model/registration.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Workspace';

  registrationForm!: FormGroup<RegistrationForm>;

  get username() {
    return this.registrationForm.get('username');
  }

  constructor(private fb: NonNullableFormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  register() {
    console.log(this, this.registrationForm.value);
  }
}

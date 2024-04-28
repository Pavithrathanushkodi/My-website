import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      birthTime: ['', Validators.required],
      birthPlace: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Form is valid, proceed with submission
      this.router.navigate(['/submit']);
    } else {
      // Form is invalid, do something (display error messages, etc.)
      this.errorMessage = 'Please enter valid data for all fields.';
    }
  }
}

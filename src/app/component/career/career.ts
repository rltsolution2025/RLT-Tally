import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-career',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {

  careerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.careerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', Validators.required]
    });
  }

  get f(){
    return this.careerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.careerForm.invalid) {
      return;
    }

    console.log('Form Submitted', this.careerForm.value);
    alert('Your application has been submitted successfully!');
    this.careerForm.reset();
    this.submitted = false;
  }
}

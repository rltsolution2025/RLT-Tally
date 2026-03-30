import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-career',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {

  careerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private api: ApiService) {
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

    if (this.careerForm.invalid) 
      return;

    this.api.career(this.careerForm.value).subscribe({
      next:()=>{
        alert('✅ Application Submitted');
        this.careerForm.reset();
        this.submitted = false;
      },
      error:(err)=>{
        console.error('Career submission error:', err);
        alert('❌ Submission Failed. Please try again properly.');
      }
    });
  }
}

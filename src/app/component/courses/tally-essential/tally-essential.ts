import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-tally-essential',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './tally-essential.html',
  styleUrl: './tally-essential.css',
})
export class TallyEssential {

  enrollForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.enrollForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['']
    });
  }

  submitForm(){
    if(this.enrollForm.valid){
      console.log(this.enrollForm.value);
      alert('Enrollment successful!');
      this.enrollForm.reset();
    }
    else{
      alert('Please fill in all required fields correctly.');
    }
  }
}

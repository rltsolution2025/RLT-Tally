import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnrollComponent } from '../../enroll/enroll.component';

@Component({
  imports: [RouterLink, CommonModule, EnrollComponent],
  selector: 'app-gen-ai',
  styleUrl: './gen-ai.css',
  templateUrl: './gen-ai.html',
})
export class GenAI {
}

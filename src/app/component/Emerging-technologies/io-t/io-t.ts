import { Component } from '@angular/core';
import { EnrollComponent } from '../../enroll/enroll.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink, CommonModule, EnrollComponent],
  selector: 'app-io-t',
  styleUrl: './io-t.css',
  templateUrl: './io-t.html',
})
export class IoT {
}

import { Component } from '@angular/core';
import { EnrollComponent } from '../../enroll/enroll.component';
import { RouterLink } from '@angular/router';

@Component({
  imports: [EnrollComponent, RouterLink],
  selector: 'app-robotics',
  styleUrl: './robotics.css',
  templateUrl: './robotics.html',
})
export class Robotics {
}

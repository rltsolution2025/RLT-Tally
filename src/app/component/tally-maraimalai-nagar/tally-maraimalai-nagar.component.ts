import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tally-maraimalai-nagar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tally-maraimalai-nagar.component.html',
  styleUrl: './tally-maraimalai-nagar.component.css',
})
export class TallyMaraimalaiNagarComponent {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit(): void {
    this.title.setTitle(
      'Tally Course in Maraimalai Nagar | Authorized Tally Training | Tally Class | Placement Assistance',
    );
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Looking to learn Tally in Maraimalai Nagar? RLT Edzaro Tally Academy offers practical training in TallyPrime, GST, accounting, payroll, and taxation to develop career-ready skills.',
      },
      {
        name: 'keywords',
        content:
          'Tally academy in Maraimalai Nagar, Tally training in Maraimalai Nagar, Best Tally institute in Maraimalai Nagar, Tally courses in Maraimalai Nagar, Tally classes in Maraimalai Nagar',
      },
    ]);

    this.meta.updateTag({
      name: 'description',
      content:
        'Join the best Tally training institute in Maraimalai Nagar. Get hands-on training from experts and boost your accounting career with practical skills.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Tally academy in Maraimalai Nagar, Tally training in Maraimalai Nagar, Best Tally institute in Maraimalai Nagar, Tally courses in Maraimalai Nagar, Tally classes in Maraimalai Nagar',
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}

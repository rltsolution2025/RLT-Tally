import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-kodambakkam',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tally-kodambakkam.component.html',
  styleUrl: './tally-kodambakkam.component.css'
})
export class TallyKodambakkamComponent {
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Tally Training Institute in Kodambakkam | Next-Gen Tally Training in Kodambakkam');
    this.meta.addTags([
      { name: 'description', content: 'Join the best Tally training institute in Kodambakkam. Get hands-on training from experts and boost your accounting career with practical skills.' },
      { name: 'keywords', content: 'Tally academy in Kodambakkam, Tally training in Kodambakkam, Best Tally institute in Kodambakkam, Tally courses in Kodambakkam, Tally classes in Kodambakkam' }
    ]);

    this.meta.updateTag({ name: 'description', content: 'Join the best Tally training institute in Kodambakkam for comprehensive Tally training. Our expert instructors provide hands-on learning to help you master Tally and boost your career prospects.' });
    this.meta.updateTag({ name: 'keywords', content: 'Tally academy in Kodambakkam, Tally training in Kodambakkam, Best Tally institute in Kodambakkam, Tally courses in Kodambakkam, Tally classes in Kodambakkam' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

}

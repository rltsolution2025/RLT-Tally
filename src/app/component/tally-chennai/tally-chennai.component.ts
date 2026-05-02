import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tally-chennai',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tally-chennai.component.html',
  styleUrl: './tally-chennai.component.css'
})
export class TallyChennaiComponent {
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Tally Training Institute in Chennai | Best Tally Training in Chennai');
    this.meta.addTags([
      { name: 'description', content: 'Join the best Tally training institute in Chennai. Get hands-on training from experts and boost your accounting career with practical skills.' },
      { name: 'keywords', content: 'Tally academy in Chennai, Tally training in Chennai, Best Tally institute in Chennai, Tally courses in Chennai, Tally classes in Chennai' }
    ]);

    this.meta.updateTag({ name: 'description', content: 'Join the best Tally training institute in Chennai. Get hands-on training from experts and boost your accounting career with practical skills.' });
    this.meta.updateTag({ name: 'keywords', content: 'Tally academy in Chennai, Tally training in Chennai, Best Tally institute in Chennai, Tally courses in Chennai, Tally classes in Chennai' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}

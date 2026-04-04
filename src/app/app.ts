import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { Footer } from './component/footer/footer';
import { MobileHeaderComponent } from './component/mobile-header/mobile-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tally-website');
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  mediaLogos = [
    { src: 'assets/iheart_radio.png', alt: 'iHeart Radio' },
    { src: 'assets/chopped.png', alt: 'Chopped' },
    { src: 'assets/food_network.png', alt: 'Food Network' },
    { src: 'assets/travel_channel.png', alt: 'Travel Channel' },
    { src: 'assets/cooking_channel.png', alt: 'The Cooking Channel' }
  ];
  logoError = false;
}

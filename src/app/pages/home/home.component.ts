import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featureCards = [
    {
      svgId: 'authentic',
      title: 'Authentic',
      desc: 'Traditional Italian recipes made the Brother Bruno way.'
    },
    {
      svgId: 'family',
      title: 'Family Owned',
      desc: 'Since 1976, built on family, hard work, and loyal customers.'
    },
    {
      svgId: 'truck',
      title: 'The CheatTruck',
      desc: 'Bringing our kitchen to you—anywhere, anytime.'
    },
    {
      svgId: 'cheatmeal',
      title: 'Cheat Meals',
      desc: 'Unique pizzas, desserts, and an experience like no other.'
    }
  ];

  mediaLogos = [
    { src: 'assets/images/logo-iheart.png', alt: 'iHeart Radio' },
    { src: 'assets/images/logo-chopped.png', alt: 'Chopped' },
    { src: 'assets/images/logo-food-network.png', alt: 'Food Network' },
    { src: 'assets/images/logo-travel-channel.png', alt: 'Travel Channel' },
    { src: 'assets/images/logo-cooking-channel.png', alt: 'The Cooking Channel' }
  ];
}

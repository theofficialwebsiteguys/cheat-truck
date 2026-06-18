import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catering',
  imports: [RouterLink],
  templateUrl: './catering.component.html',
  styleUrl: './catering.component.scss'
})
export class CateringComponent {
  perfectFor = [
    { label: 'Birthday Parties', icon: 'balloon' },
    { label: 'Weddings', icon: 'ring' },
    { label: 'Corporate Events', icon: 'building' },
    { label: 'Festivals & Fairs', icon: 'tent' },
    { label: 'Fundraisers & Community Events', icon: 'heart' },
    { label: 'School Functions', icon: 'school' },
  ];
}

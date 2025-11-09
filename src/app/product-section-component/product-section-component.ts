import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent {

  specialOffers = [
    {
      img: 'assets/item1.jpg',
      title: 'Wall-Mount Glove Dispensers'
    },
    {
      img: 'assets/item2.jpg',
      title: 'ValuLine™ Wash Stations'
    },
    {
      img: 'assets/item3.jpg',
      title: 'Cleanroom Curtains and Strip Shields'
    },
    {
      img: 'assets/item4.jpg',
      title: 'HEPA Filters'
    }
  ];

  relatedItems = [
    {
      img: 'assets/rel1.jpg',
      title: 'LED Light Panels'
    },
    {
      img: 'assets/rel2.jpg',
      title: 'BioSafe Cleanroom Mirrors'
    },
    {
      img: 'assets/rel3.jpg',
      title: 'Cleanroom Talk-Through'
    },
    {
      img: 'assets/rel4.jpg',
      title: 'CleanMount Pass-Throughs'
    }
  ];

}

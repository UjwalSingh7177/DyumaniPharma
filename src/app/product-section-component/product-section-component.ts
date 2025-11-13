import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-section-component.html',
  styleUrls: ['./product-section-component.css']
})
export class ProductSectionComponent {

  @ViewChild('specialOffersRef', { static: false }) specialOffersRef!: ElementRef;
  @ViewChild('relatedItemsRef', { static: false }) relatedItemsRef!: ElementRef;

  specialOffers = [
    { img: 'assets/l3.webp', title: 'Wall-Mount Glove Dispensers' },
    { img: 'assets/l3.webp', title: 'ValuLine™ Wash Stations' },
    { img: 'assets/l3.webp', title: 'Cleanroom Curtains and Strip Shields' },
    { img: 'assets/l3.webp', title: 'HEPA Filters' },
    { img: 'assets/l3.webp', title: 'Wall-Mount Glove Dispensers' },
    { img: 'assets/l3.webp', title: 'ValuLine™ Wash Stations' },
    { img: 'assets/l3.webp', title: 'Cleanroom Curtains and Strip Shields' },
    { img: 'assets/l3.webp', title: 'HEPA Filters' }
  ];

  relatedItems = [
    { img: 'assets/l1.webp', title: 'LED Light Panels' },
    { img: 'assets/l1.webp', title: 'BioSafe Cleanroom Mirrors' },
    { img: 'assets/l1.webp', title: 'Cleanroom Talk-Through' },
    { img: 'assets/l1.webp', title: 'CleanMount Pass-Throughs' },
    { img: 'assets/l1.webp', title: 'LED Light Panels' },
    { img: 'assets/l1.webp', title: 'BioSafe Cleanroom Mirrors' },
    { img: 'assets/l1.webp', title: 'Cleanroom Talk-Through' },
    { img: 'assets/l1.webp', title: 'CleanMount Pass-Throughs' }
  ];

  /** Scroll left */
  scrollLeft(section: 'specialOffers' | 'relatedItems') {
    const target = section === 'specialOffers' ? this.specialOffersRef : this.relatedItemsRef;
    target.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  /** Scroll right */
  scrollRight(section: 'specialOffers' | 'relatedItems') {
    const target = section === 'specialOffers' ? this.specialOffersRef : this.relatedItemsRef;
    target.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}

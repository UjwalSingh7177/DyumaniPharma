import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ProductCard {
  title: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-cleanroom-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cleanroom-carousel-component.html',
  styleUrls: ['./cleanroom-carousel-component.css']
})
export class CleanroomCarouselComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

  products: ProductCard[] = [
    { title: 'Hardwall Cleanrooms', img: 'assets/l1.webp', description: 'Fully sealed enclosure with clear rigid panels ensuring high contamination control' },
    { title: 'Softwall Cleanrooms', img: 'assets/l1.webp', description: 'Flexible PVC curtains, lightweight and cost-effective cleanroom solution' },
    { title: 'BioSafe® Wall Panel System', img: 'assets/l1.webp', description: 'GMP compliant cleanroom panels with smooth radius corners and seamless joints' },
    { title: 'BioSafe® Modular Cleanrooms', img: 'assets/l1.webp', description: 'Prefabricated modular cleanrooms with rapid installation and flexibility' },
    { title: 'USP Compounding Cleanrooms', img: 'assets/l1.webp', description: 'Classified sterile environments for compounding medicines under USP standards' },
    { title: 'USP Compounding Cleanrooms', img: 'assets/l1.webp', description: 'Classified sterile environments for compounding medicines under USP standards' },
    { title: 'USP Compounding Cleanrooms', img: 'assets/l1.webp', description: 'Classified sterile environments for compounding medicines under USP standards' },{ title: 'USP Compounding Cleanrooms', img: 'assets/l1.webp', description: 'Classified sterile environments for compounding medicines under USP standards' }
  ];

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}

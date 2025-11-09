import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-component.html',
  styleUrls: ['./slider-component.css']
})
export class SliderComponent implements OnInit {
  images: string[] = [
    'assets/l1.webp',
    'assets/l2.webp',
    'assets/l3.webp'
  ];
  currentSlide = 0;
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }
}

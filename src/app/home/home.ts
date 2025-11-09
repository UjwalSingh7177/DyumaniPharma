import { Component } from '@angular/core';
import { SliderComponent } from '../slider-component/slider-component';
import { CleanroomComponent } from '../cleanroom-component/cleanroom-component';
import { CleanroomCarouselComponent } from '../cleanroom-carousel-component/cleanroom-carousel-component';
import { Coursel1 } from '../coursel1/coursel1';
import { Coursel2 } from '../coursel2/coursel2';
import { Coursel3 } from '../coursel3/coursel3';
import { Coursel4 } from '../coursel4/coursel4';
import { ProductSectionComponent } from '../product-section-component/product-section-component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CleanroomComponent, CleanroomCarouselComponent,
    Coursel1, Coursel2, Coursel3, Coursel4
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

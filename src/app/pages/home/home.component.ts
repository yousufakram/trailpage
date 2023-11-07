import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

import Swiper from 'swiper';
const mySwiper = new Swiper('.mySwiper1', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 6,
    },
  },
});


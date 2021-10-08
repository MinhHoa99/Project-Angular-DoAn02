import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(200px)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-200px)' }))], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ]

})
export class SlideComponent implements OnInit {
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  image = [
    'https://cdn.tgdd.vn/Files/2021/03/23/1337472/danh-gia-google-pixel-5-chiec-pixel-cao-cap-hoan--1.jpg',
    'https://i.ytimg.com/vi/QqJdeif7SlU/maxresdefault.jpg',
    'https://www.viettablet.com/images/companies/1/dien-thoai-samsung/galaxy-s21-ultra/samsung-galaxy-s21-ultra-cu-va-moi.jpg?1611049540548',
  ];

  onNext() {
    if (this.counter != this.image.length - 1) {
      this.counter++;
    }
  }

  onPrevious() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {Slide, SliderService} from "../../services/slider.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit {
  slides!: Slide[];
  currentIndex: number = 0;
  slidesToShow: number = 3;

  constructor(private _sliderService: SliderService) {}

  ngOnInit(): void {
    this.slides = this._sliderService.getSliderContent();
  }

  onNextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  onPrevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  getVisibleSlides(): Slide[] {
    const visibleSlides: Slide[] = [];
    for (let i = 0; i < this.slidesToShow; i++) {
      const index = (this.currentIndex + i) % this.slides.length;
      visibleSlides.push(this.slides[index]);
    }
    return visibleSlides;
  }
}

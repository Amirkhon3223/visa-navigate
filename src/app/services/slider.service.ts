import {Injectable} from '@angular/core';

export interface Slide {
  id: number,
  image: string,
  icon: string,
  title: string,
  description: string,
}

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() {
  }

  slideContent: Slide[] = [
    {
      id: 1,
      image: 'assets/images/america.png',
      icon: 'assets/images/america.png',
      title: 'Vis to America',
      description: 'Hello u wanna go America? Ok!'
    },
    {
      id: 2,
      image: 'assets/images/canada.png',
      icon: 'assets/images/canada.png',
      title: 'Visa to Canada',
      description: 'Hello u wanna go Canada? Ok!'
    },
    {
      id: 3,
      image: 'assets/images/australia.png',
      icon: 'assets/images/australia.png',
      title: 'Vis to Australia',
      description: 'Hello u wanna go Australia? Ok!'
    },
    {
      id: 4,
      image: 'assets/images/germany.png',
      icon: 'assets/images/germany.png',
      title: 'Vis to Germany',
      description: 'Hello u wanna go Germany? Ok!'
    },
  ]

  getSliderContent(): Slide[] {
    return this.slideContent
  }
}

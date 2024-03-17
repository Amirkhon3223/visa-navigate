import { Component } from '@angular/core';
import {SliderComponent} from "../../components/slider/slider.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SliderComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}

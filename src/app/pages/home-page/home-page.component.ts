import { Component } from '@angular/core';
import {SliderComponent} from "../../components/slider/slider.component";
import { BecameAnExamComponent } from '../../components/became-an-exam/became-an-exam.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SliderComponent,
    BecameAnExamComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}

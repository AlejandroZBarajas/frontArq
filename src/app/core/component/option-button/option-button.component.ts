import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'option-button',
  standalone: false,

  templateUrl: './option-button.component.html',
  styleUrl: './option-button.component.css'
})
export class OptionButtonComponent {

  @Input() label!: string
  @Input() route!: string

  constructor(private router: Router) {}

  navigate(){
    this.router.navigate([this.route])
  }

}

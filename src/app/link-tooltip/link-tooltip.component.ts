import { Component } from '@angular/core';

@Component({
  selector: 'app-link-tooltip',
  templateUrl: './link-tooltip.component.html',
  styleUrls: ['./link-tooltip.component.css']
})
export class LinkTooltipComponent {
  linkUrl: string = 'https://www.example.com';
  linkText: string = 'Visit Example.com';
  tooltipText: string = 'This is a tooltip!';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomepageComponent implements OnInit {
  currentScroll = 0;
  scrollAmount = 320;
  maxScroll: number = 0;  // Declare maxScroll as a class property

  // Add any necessary DOM element references here
  sCont: HTMLElement | null = null;
  hScroll: HTMLElement | null = null;
  leftButton: HTMLElement | null = null;
  rightButton: HTMLElement | null = null;

  ngOnInit(): void {
    // Initialize your DOM element references here
    this.sCont = document.querySelector(".stories");
    this.hScroll = document.querySelector(".status-wrapper");
    this.leftButton = document.querySelector("#scroll-left");
    this.rightButton = document.querySelector("#scroll-right");

    if (this.sCont && this.hScroll && this.leftButton && this.rightButton) {
      this.maxScroll = -this.sCont.offsetWidth + this.hScroll.offsetWidth;
      this.leftButton.style.opacity = '0';

      // Add any necessary event listeners or call your scroll function here
    }
  }

  scrollHorizontal(val: number): void {
    if (this.sCont && this.leftButton && this.rightButton) {
      this.currentScroll += val * this.scrollAmount;
      if (this.currentScroll >= 0) {
        this.currentScroll = 0;
        this.leftButton.style.opacity = '0';
      } else {
        this.leftButton.style.opacity = '1';
      }
      if (this.currentScroll <= this.maxScroll) {
        this.currentScroll = this.maxScroll;
        this.rightButton.style.opacity = '0';
      } else {
        this.rightButton.style.opacity = '1';
      }
      if (this.sCont) {
        this.sCont.style.left = this.currentScroll + "px";
      }
    }
  }
}

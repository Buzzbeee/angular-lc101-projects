import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
 }

 handleLand(rocketImage) {
  this.takeOffEnabled = true;
  rocketImage.style.bottom = '0px'
  this.color = 'green';
  this.height = 0;
  this.width = 0;
  this.message = 'Space shuttle ready for takeoff!';
 }

 moveRocket(rocketImage, direction) {
  switch(direction) {
    case 'up':
      rocketImage.style.bottom = parseInt(rocketImage.style.bottom) + 10 + 'px';
      this.height = this.height + 10000;
      break;
    case 'down':
      rocketImage.style.bottom = parseInt(rocketImage.style.bottom) - 10 + 'px';
      this.height = this.height - 10000;
      break;
    case 'left':
      rocketImage.style.left = parseInt(rocketImage.style.left) - 10 + 'px';
      this.width = this.width - 10000;
      break;
    case 'right':
      rocketImage.style.left = parseInt(rocketImage.style.left) + 10 + 'px';
      this.width = this.width + 10000;
      break;
  }
}

checkRocketStatus(): boolean {
  if(this.takeOffEnabled) {
    return true;
  }else {
    return false;
  }
}

checkBounds(boundry: Element, rocket: Element, direction: string): boolean {
  let rocketRect = rocket.getBoundingClientRect()
  let backgroundRect = boundry.getBoundingClientRect();

  if(rocketRect.right > backgroundRect.right + 10 || rocketRect.left < backgroundRect.left - 10 || rocketRect.bottom > backgroundRect.bottom - 10 || rocketRect.top < backgroundRect.top + 10) {
    this.color = 'red';
  } else {
    this.color = 'blue';
  }

  switch (direction) {
    case 'up':
      if (rocketRect.top < backgroundRect.top + 10) {
        return false;
      }
      return true;
    case 'down':
      if (rocketRect.bottom > backgroundRect.bottom - 10) {
        return false;
      }
      return true;
    case 'left':
      if (rocketRect.left < backgroundRect.left - 10) {
        return false;
      }
      return true;
    case 'right':
      if (rocketRect.right > backgroundRect.right + 10) {
        return false;
      }
      return true;
  }

  

}

}



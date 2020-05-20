import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ['https://www.readitcheck.com', 'https://www.buzzardsview.com'];
  favText = ['Read It Check', 'Buzzards View']

  constructor() { }

  ngOnInit() {
  }

}

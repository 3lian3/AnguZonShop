import { Component } from '@angular/core';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nav_data: Item[] = nav_items
  auth_date: Item[] = auth_items;

  ngOnInit() {

  }

}

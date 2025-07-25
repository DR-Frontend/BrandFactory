import { Component } from '@angular/core';
import { HomeBanners } from "../../components/home-banners/home-banners";
import { SelectedItems } from "../../components/selected-items/selected-items";
import { Highlights } from "../../components/highlights/highlights";

@Component({
  selector: 'home',
  imports: [HomeBanners, SelectedItems, Highlights],
  templateUrl: './home.html'
})
export class Home {

}

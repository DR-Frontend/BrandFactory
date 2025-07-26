import { Component } from '@angular/core';
import { HomeBanners } from "../../components/home-banners/home-banners";
import { SelectedItems } from "../../components/selected-items/selected-items";
import { Highlights } from "../../components/highlights/highlights";
import { BestSellers } from "../../components/best-sellers/best-sellers";
import { SpecialServices } from "../../components/special-services/special-services";
import { Dealers } from "../../components/dealers/dealers";
import { FooterInfo } from "../../components/footer-info/footer-info";

@Component({
  selector: 'home',
  imports: [HomeBanners, SelectedItems, Highlights, BestSellers, SpecialServices, Dealers, FooterInfo],
  templateUrl: './home.html'
})
export class Home {

}
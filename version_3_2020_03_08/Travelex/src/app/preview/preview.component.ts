import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travelitems } from '../travelinfos';
import { CartService } from '../cart.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  travelitems = travelitems;
  searchText;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(travelitem) {
    this.cartService.addToCart(travelitem);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
  }

}

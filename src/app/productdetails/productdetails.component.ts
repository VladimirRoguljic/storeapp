import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute,
              private cartService: CartService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    window.alert('Your product has been added on the cart!');
    this.cartService.addToCart(product);
  }

}

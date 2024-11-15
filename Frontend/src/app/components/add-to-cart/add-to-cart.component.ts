// src/app/add-to-cart/add-to-cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  imports:[CommonModule],
  styleUrls: ['./add-to-cart.component.css'],
  standalone :true
})
export class AddToCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalCost: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    const userId = 1; // Replace with actual user ID
    this.cartService.getCartItems(userId).subscribe(
      (items) => {
        this.cartItems = items;
        this.calculateTotalCost();
      },
      (error) => {
        console.error('Error loading cart items:', error);
      }
    );
  }

  calculateTotalCost() {
    this.totalCost = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
  addToCart(s:any){
    console.log(s);
  }
}

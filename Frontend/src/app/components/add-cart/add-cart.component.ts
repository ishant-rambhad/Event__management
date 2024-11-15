import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-cart.component.html',
  standalone:true,
  imports:[FormsModule,CommonModule],
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent {
  cartItems = [
    { name: 'Balloon Services', price: 1500, quantity: 2 },  // ₹1500 × 2 = ₹3000
    { name: 'Catering Services', price: 10000, quantity: 1 }, // ₹10000 × 1 = ₹10000
    { name: 'Tent Decoration', price: 7000, quantity: 2 },    // ₹7000 × 2 = ₹14000
    { name: 'Astrologer', price: 3000, quantity: 1 },         // ₹3000 × 1 = ₹3000
    { name: 'Music and Sound System', price: 5000, quantity: 0 } // Not added, ₹0
  ];

  totalAmount = 0;

  constructor() {
    this.updateTotal();
  }

  // Update Total Amount
  updateTotal(): void {
    this.totalAmount = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  // Remove Item from Cart
  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateTotal();
  }
}

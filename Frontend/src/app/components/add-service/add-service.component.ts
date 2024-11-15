import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CartItem {
  photoUrl: string;
  userId: number;
  serviceId: number;
  category: string;
  price: number;
  quantity: number;
  itemName: string;
}

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ServicePageComponent {
  services: any[] = [];
  newService: any = {
    categoryName: '',
    itemName: '',
    price: 0,
    serviceId: 0
  };
  selectedFile: File | null = null;

  constructor(private cartService: CartService) { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!validExtensions.includes(file.type)) {
        alert('Only JPG, JPEG, and PNG files are allowed.');
        return;
      }
      this.selectedFile = file;
    }
  }

  addService() {
    if (!this.selectedFile) {
      alert('Please select an image file');
      return;
    }

    // Create the cart item object
    const cartItem: CartItem = {
      photoUrl: '',
      userId: 1, // Replace with actual user ID
      serviceId: this.newService.serviceId || 0,
      category: this.newService.categoryName,
      price: this.newService.price,
      quantity: 1,
      itemName: this.newService.itemName
    };

    // Create FormData and append all necessary data
    const formData = new FormData();
    
    // Append cart item as JSON blob
    formData.append('cartItem', new Blob([JSON.stringify(cartItem)], {
      type: 'application/json'
    }));
    
    // Append the file
    formData.append('photo', this.selectedFile);

    // Send the formData to the service
    this.cartService.addToCart(formData).subscribe({
      next: (savedService) => {
        console.log('Service saved successfully:', savedService);
        this.services.push(savedService);
        this.resetForm();
      },
      error: (error) => {
        console.error('Error saving service:', error);
        alert('Error saving service. Please try again.');
      }
    });
  }

  private resetForm() {
    this.newService = {
      categoryName: '',
      itemName: '',
      price: 0,
      serviceId: 0
    };
    this.selectedFile = null;
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }
}
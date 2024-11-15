// src/app/models/cart-item.model.ts
export interface CartItem {
  photoUrl: any;
  userId: number;
  serviceId: number;
  category: string; // Ensure category is defined
  price: number;
  quantity: number;
  

}

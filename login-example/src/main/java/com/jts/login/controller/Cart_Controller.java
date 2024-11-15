package com.jts.login.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.jts.login.model.Cart;
import com.jts.login.service.Cart_Service;
import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:4200") // Update with your Angular frontend's URL
public class Cart_Controller {

    @Autowired
    private Cart_Service cartService;

    @PostMapping("/add")
    public Cart addCartItem(@RequestBody Cart cart) {
        return cartService.saveCartItem(cart);
    }

    @GetMapping("/all")
    public List<Cart> getAllCartItems() {
        return cartService.getAllCartItems();
    }
}

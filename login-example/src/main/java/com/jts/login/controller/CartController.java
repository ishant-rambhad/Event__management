package com.jts.login.controller;
import com.jts.login.model.CartItem;
import com.jts.login.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping(value = "/add", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<?> addToCart(
            @RequestPart("cartItem") CartItem cartItem,
            @RequestPart(value = "photo", required = false) MultipartFile photoFile) {
        try {
            CartItem savedItem = cartService.addToCart(cartItem, photoFile);
            return ResponseEntity.ok(savedItem);
        } catch (IOException e) {
            return ResponseEntity.internalServerError()
                .body("Error processing image: " + e.getMessage());
        }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<CartItem>> getCartItems(@PathVariable Long userId) {
        List<CartItem> items = cartService.getCartItems(userId);
        return ResponseEntity.ok(items);
    }
}
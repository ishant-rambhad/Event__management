package com.jts.login.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.jts.login.model.CartItem;
import com.jts.login.repo.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class CartService {
    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private Cloudinary cloudinary;

    public CartItem addToCart(CartItem cartItem, MultipartFile photoFile) throws IOException {
        if (photoFile != null && !photoFile.isEmpty()) {
            try {
                // Upload image to Cloudinary with specific folder
                Map<String, Object> uploadResult = cloudinary.uploader().upload(
                        photoFile.getBytes(),
                        ObjectUtils.asMap(
                                "folder", "event_app/images",
                                "resource_type", "auto",
                                "unique_filename", true));

                // Get and set the secure URL from Cloudinary
                String secureUrl = uploadResult.get("secure_url").toString();
                cartItem.setPhotoUrl(secureUrl);

                // Log success
                System.out.println("Image uploaded successfully to Cloudinary: " + secureUrl);
            } catch (IOException e) {
                System.err.println("Error uploading image to Cloudinary: " + e.getMessage());
                throw e;
            }
        }

        return cartItemRepository.save(cartItem);
    }

    public List<CartItem> getCartItems(Long userId) {
        return cartItemRepository.findByUserId(userId);
    }
}
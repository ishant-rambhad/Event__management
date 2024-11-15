package com.jts.login.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jts.login.model.Cart;
import com.jts.login.repo.CartRepository;
import java.util.List;

@Service
public class Cart_Service {

    @Autowired
    private CartRepository cartRepository;

    public Cart saveCartItem(Cart cart) {
        return cartRepository.save(cart);
    }

    public List<Cart> getAllCartItems() {
        return cartRepository.findAll();
    }
}

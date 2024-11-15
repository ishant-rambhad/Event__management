package com.jts.login.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.jts.login.model.CartItem;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUserId(Long userId);
}

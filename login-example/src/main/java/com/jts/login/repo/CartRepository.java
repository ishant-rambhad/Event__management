package com.jts.login.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jts.login.model.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
}

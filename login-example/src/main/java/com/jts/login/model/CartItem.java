package com.jts.login.model;

import jakarta.persistence.*;
import lombok.Getter;

import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "cart_items")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private Long serviceId;
    private String category;
    private String itemName;
    private Double price;
    private Integer quantity;
    private String photoUrl;
}
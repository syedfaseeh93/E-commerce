package com.ecommerce.onlineshop.repository.order;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.onlineshop.model.order.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
    
}

package com.ecommerce.onlineshop.repository.order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecommerce.onlineshop.model.order.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    
    @Query("SELECT o From Order o Where o.user.id=:userId")
    public List<Order> getUsersOrders(Long userId);
}
// And(o.orderStatus='PLACED' OR o.orderStatus='CONFIRMED' OR o.orderStatus='DELIVERED' OR o.orderStatus='SHIPPED'
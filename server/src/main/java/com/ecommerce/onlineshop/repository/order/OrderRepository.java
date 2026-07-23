package com.ecommerce.onlineshop.repository.order;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecommerce.onlineshop.model.order.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    
    @Query("SELECT o From Order o Where o.user.id=:userId")
    public List<Order> getUsersOrders(@Param("userId") Long userId);

    public Optional<Order> findByOrderId(String orderId);
}
// And(o.orderStatus='PLACED' OR o.orderStatus='CONFIRMED' OR o.orderStatus='DELIVERED' OR o.orderStatus='SHIPPED'
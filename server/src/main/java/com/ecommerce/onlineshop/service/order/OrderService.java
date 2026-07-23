package com.ecommerce.onlineshop.service.order;

import java.util.List;

import com.ecommerce.onlineshop.exception.OrderException;
import com.ecommerce.onlineshop.model.order.Order;
import com.ecommerce.onlineshop.model.user.Address;
import com.ecommerce.onlineshop.model.user.User;

public interface OrderService {

    public Order createOrder(User user, Address shippAddress);

    public Order findOrderById(Long orderId) throws OrderException;

    public Order findOrderByOrderId(String orderId) throws OrderException;

    public List<Order> usersOrderHistory(Long userId);

    public Order placedOrder(Long orderId) throws OrderException;

    public Order confirmedOrder(Long orderId) throws OrderException;

    public Order shippedOrder(Long orderId) throws OrderException;

    public Order deliveredOrder(Long orderId) throws OrderException;

    public Order cancelledOrder(Long orderId) throws OrderException;

    public List<Order> getAllOrders();

    public void deleteOrder(Long orderId) throws OrderException;

}

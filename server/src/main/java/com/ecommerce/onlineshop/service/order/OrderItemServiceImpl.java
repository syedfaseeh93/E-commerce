package com.ecommerce.onlineshop.service.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.onlineshop.model.order.OrderItem;
import com.ecommerce.onlineshop.repository.order.OrderItemRepository;

@Service
public class OrderItemServiceImpl implements OrderItemService {

    @Autowired
    OrderItemRepository orderItemRepository;


    @Override
    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }
    
}

package com.ecommerce.onlineshop.controller.order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.onlineshop.service.order.OrderService;
import com.ecommerce.onlineshop.service.user.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import com.ecommerce.onlineshop.exception.OrderException;
import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.order.Order;
import com.ecommerce.onlineshop.model.user.Address;
import com.ecommerce.onlineshop.model.user.User;



@RestController
@RequestMapping("/api/orders")
public class OrderController {
    
    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;

    @PostMapping("/")
    public ResponseEntity<Order> createOrder(@RequestBody Address shippingAdd,@RequestHeader("Authorization") String jwt) throws UserException {
        
        User user=userService.findUserProfileByJWT(jwt);
        Order order=orderService.createOrder(user, shippingAdd); 

        return new ResponseEntity<>(order,HttpStatus.CREATED);
    }
 
     @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrder(@PathVariable Long orderId) throws OrderException{
       
        Order order=orderService.findOrderById(orderId);

        return new ResponseEntity<>(order,HttpStatus.ACCEPTED);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>> getAllOrders(@RequestHeader("Authorization") String jwt) throws UserException{

        User user=userService.findUserProfileByJWT(jwt);

        List<Order> orders=orderService.usersOrderHistory(user.getId());

        return new ResponseEntity<>(orders,HttpStatus.OK);
    }
    
}

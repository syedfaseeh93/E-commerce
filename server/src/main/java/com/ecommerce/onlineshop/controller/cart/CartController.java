package com.ecommerce.onlineshop.controller.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.onlineshop.service.cart.CartService;
import com.ecommerce.onlineshop.service.user.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.cart.Cart;
import com.ecommerce.onlineshop.model.user.User;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.requests.AddItemRequest;
import com.ecommerce.onlineshop.response.ApiResponse;



@RestController
@RequestMapping("/api/cart")

public class CartController {

    @Autowired
    private CartService cartService;
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<Cart> getUserCart(@RequestHeader("Authorization") String jwt) throws UserException{

        User user=userService.findUserProfileByJWT(jwt);
        Cart cart=cartService.findUserCart(user.getId());

        return new ResponseEntity<>(cart,HttpStatus.OK);
    }

    @PutMapping("/add")
    public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req,@RequestHeader("Authorization") String jwt) throws ProductException,UserException{

        User user=userService.findUserProfileByJWT(jwt);

        cartService.addCartItem(user.getId(), req);

        ApiResponse res=new ApiResponse();
        res.setMessage("Item Added To Cart");
        res.setStatus(true);

        return new ResponseEntity<>(res,HttpStatus.OK);
    }
    

}

package com.ecommerce.onlineshop.service.cart;

import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.model.cart.Cart;
import com.ecommerce.onlineshop.model.user.User;
import com.ecommerce.onlineshop.requests.AddItemRequest;

public interface CartService {
    
    public Cart createCart(User user);
    
    public String addCartItem(Long userId,AddItemRequest addItemRequest) throws ProductException;

    public Cart findUserCart(Long userId);
}

package com.ecommerce.onlineshop.service.cart;

import com.ecommerce.onlineshop.exception.CartItemException;
import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.cart.Cart;
import com.ecommerce.onlineshop.model.cart.CartItem;
import com.ecommerce.onlineshop.model.product.Product;

public interface CartItemService {

    public CartItem createCartItem(CartItem cartItem);

    public CartItem updateCartItem(Long userId,Long id,CartItem cartItem) throws CartItemException,UserException;

    public CartItem isCartItemExist(Cart cart,Product product,String size,Long userId);
    
    public void removeCartItem(Long userId,Long cartItemId) throws CartItemException,UserException;

    public CartItem findCartItemById(Long cartItemId) throws CartItemException;
}

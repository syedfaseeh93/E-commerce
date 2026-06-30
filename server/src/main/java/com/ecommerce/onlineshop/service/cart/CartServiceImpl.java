package com.ecommerce.onlineshop.service.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.model.cart.Cart;
import com.ecommerce.onlineshop.model.cart.CartItem;
import com.ecommerce.onlineshop.model.product.Product;
import com.ecommerce.onlineshop.model.user.User;
import com.ecommerce.onlineshop.repository.cart.CartRepository;
import com.ecommerce.onlineshop.requests.AddItemRequest;
import com.ecommerce.onlineshop.service.product.ProductService;

@Service
public class CartServiceImpl implements CartService{

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CartItemService cartItemService;
    @Autowired
    private ProductService productService;
    
    @Override
    public Cart createCart(User user) {
        Cart cart =new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
        Cart cart=cartRepository.findByUserId(userId);
        Product product=productService.findProductById(req.getProductId());

        CartItem isPresent=cartItemService.isCartItemExist(cart, product, req.getSize(), userId);

        if(isPresent==null){
            CartItem cartItem=new CartItem();
            cartItem.setCart(cart);
            cartItem.setProduct(product);
            cartItem.setSize(req.getSize());
            cartItem.setUserId(userId);

            CartItem createdCartItem=cartItemService.createCartItem(cartItem);
            cart.getCartItems().add(createdCartItem);
        }
        return "Item Added Successfully!";
    }

    @Override
    public Cart findUserCart(Long userId) {
        Cart cart=cartRepository.findByUserId(userId);

        int totalPrice=0;
        int totalDiscountedPrice=0;
        int totalItems=0;

        for(CartItem cartItem:cart.getCartItems()){
            totalPrice=totalPrice+cartItem.getPrice();
            totalDiscountedPrice=totalDiscountedPrice+cartItem.getDiscountedPrice();
            totalItems=totalItems+cartItem.getQuantity();
        }

        cart.setTotalDiscountedPrice(totalDiscountedPrice);
        cart.setTotalItems(totalItems);
        cart.setTotalPrice(totalPrice);
        cart.setDiscount(totalPrice-totalDiscountedPrice);

        return cartRepository.save(cart);
    }
    
}

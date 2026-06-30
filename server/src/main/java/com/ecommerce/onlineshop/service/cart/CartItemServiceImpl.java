package com.ecommerce.onlineshop.service.cart;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.onlineshop.exception.CartItemException;
import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.cart.Cart;
import com.ecommerce.onlineshop.model.cart.CartItem;
import com.ecommerce.onlineshop.model.product.Product;
import com.ecommerce.onlineshop.model.user.User;
import com.ecommerce.onlineshop.repository.cart.CartItemRepository;
import com.ecommerce.onlineshop.service.user.UserService;

@Service
public class CartItemServiceImpl implements CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private UserService userService;

    @Override
    public CartItem createCartItem(CartItem cartItem) {
        cartItem.setQuantity(1);
        cartItem.setPrice(cartItem.getQuantity() * cartItem.getProduct().getPrice());
        cartItem.setDiscountedPrice(cartItem.getQuantity() * cartItem.getProduct().getDiscountedPrice());

        CartItem createdCartItem = cartItemRepository.save(cartItem);
        return createdCartItem;
    }

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {

        CartItem item = findCartItemById(id);
        User user = userService.findUserByid(userId);

        if (user.getId().equals(userId)) {
            item.setQuantity(cartItem.getQuantity());
            item.setPrice(item.getQuantity() * item.getProduct().getPrice());
            item.setDiscountedPrice(item.getDiscountedPrice() * item.getProduct().getDiscountedPrice());
        }
        return cartItemRepository.save(item);

    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
        CartItem cartItem=cartItemRepository.isCartItemExist(cart, product, size, userId);
        return cartItem;
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
        User user=userService.findUserByid(userId);
        CartItem cartItem=findCartItemById(cartItemId);

        if(cartItem.getUserId().equals(user.getId())){
            cartItemRepository.deleteById(cartItemId);
        }
        else {
            throw new UserException("user Not Found with UserId : " + userId);
        }
    }

    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {
        Optional<CartItem> opt =cartItemRepository.findById(cartItemId);
        if(opt.isPresent()){
            return opt.get();
        }
        else{
            throw new CartItemException("Cart item Not Found with ID: "+cartItemId);
        }
    }

}

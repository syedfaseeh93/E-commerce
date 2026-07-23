package com.ecommerce.onlineshop.controller.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.onlineshop.exception.CartItemException;
import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.cart.CartItem;
import com.ecommerce.onlineshop.model.user.User;
import com.ecommerce.onlineshop.response.ApiResponse;
import com.ecommerce.onlineshop.service.cart.CartItemService;
import com.ecommerce.onlineshop.service.user.UserService;



@RestController
@RequestMapping("/api/cartitems")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<CartItem> createCartItem(@RequestBody CartItem req) {

        CartItem item=cartItemService.createCartItem(req);
        
        return new ResponseEntity<>(item,HttpStatus.CREATED);

    }

    @PutMapping("/{cartItemId}/update")
    public ResponseEntity<CartItem> updateCartItem(@RequestHeader("Authorization") String jwt,@PathVariable Long cartItemId,@RequestBody CartItem item)throws UserException,CartItemException{
        
        User user=userService.findUserProfileByJWT(jwt);
        
        CartItem cartItem=cartItemService.updateCartItem(user.getId(), cartItemId, item);
    
        return new ResponseEntity<>(cartItem,HttpStatus.OK);
    }
    
    @GetMapping("/{cartItemId}")
    public ResponseEntity<CartItem> findCartItem(@PathVariable Long cartItemId) throws CartItemException {
        
        CartItem item=cartItemService.findCartItemById(cartItemId);
        
        return new ResponseEntity<>(item,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{cartItemId}")
    public ResponseEntity<ApiResponse> deleteCartitem(@PathVariable Long cartItemId,@RequestHeader("Authorization") String jwt) throws CartItemException,UserException{
        
        User user=userService.findUserProfileByJWT(jwt);
        cartItemService.removeCartItem(user.getId(),cartItemId);

        ApiResponse res=new ApiResponse();
        res.setMessage("Deleted Cartitem");
        res.setStatus(true);

        return new ResponseEntity<>(res,HttpStatus.OK);
    }
    
}

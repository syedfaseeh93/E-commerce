package com.ecommerce.onlineshop.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.user.User;
import com.ecommerce.onlineshop.service.user.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<User> getuserProfile(@RequestHeader("Authorization") String jwt) throws UserException {
        System.out.println("hiii"+jwt);
        User user = userService.findUserProfileByJWT(jwt);
        
        return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
    }

}

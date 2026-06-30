package com.ecommerce.onlineshop.service.user;

import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.user.User;

public interface UserService {
    public User findUserByid(Long userId) throws UserException;
    public User findUserProfileByJWT(String jwt) throws UserException;
}

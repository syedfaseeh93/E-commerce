package com.ecommerce.onlineshop.service.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.onlineshop.config.JWTUtil;
import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.user.User;
import com.ecommerce.onlineshop.repository.user.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JWTUtil jwtUtil;

    @Override
    public User findUserByid(Long userId) throws UserException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            return user.get();
        }
        throw new UserException("null");
    }

    @Override
    public User findUserProfileByJWT(String jwt) throws UserException {

        System.out.println("Hii");
        if (jwt == null || jwt.isBlank()) {
            throw new UserException("JWT token is missing");
        }

        // Remove Bearer prefix if present
        if (jwt.startsWith("Bearer ")) {
            jwt = jwt.substring(7);
        }

        String email = jwtUtil.ExtractUsername(jwt);

        if (email == null) {
            throw new UserException("Invalid JWT token");
        }

        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new UserException("User not found with email: " + email);
        }

        return user;
    }

}

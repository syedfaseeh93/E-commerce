package com.ecommerce.onlineshop.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.onlineshop.model.user.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
    
}

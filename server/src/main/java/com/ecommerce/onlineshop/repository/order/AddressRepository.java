package com.ecommerce.onlineshop.repository.order;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.onlineshop.model.user.Address;

public interface AddressRepository extends JpaRepository<Address,Long> {
    
}

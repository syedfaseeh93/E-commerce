package com.ecommerce.onlineshop.repository.reviewAndrating;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecommerce.onlineshop.model.ratingAndreview.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{

    @Query("SELECT r From Review r Where r.product.id= :productId")
    public List<Review> getAllProductsReviews( @Param("productId") Long productId);
    
}

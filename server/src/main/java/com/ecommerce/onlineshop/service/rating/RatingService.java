package com.ecommerce.onlineshop.service.rating;

import java.util.List;

import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.ratingAndreview.Rating;
import com.ecommerce.onlineshop.requests.RatingRequest;

public interface RatingService {

   public Rating createRating(RatingRequest req, String jwt) 
        throws ProductException, UserException;
    public List<Rating> getAllProductsRatings(Long productId);
    
}

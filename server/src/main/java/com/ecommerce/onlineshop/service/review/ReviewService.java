package com.ecommerce.onlineshop.service.review;

import java.util.List;

import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.ratingAndreview.Review;
import com.ecommerce.onlineshop.model.user.User;
import com.ecommerce.onlineshop.requests.ReviewRequest;

public interface ReviewService{

    public Review createReview(ReviewRequest req,User user) throws ProductException,UserException;

    public List<Review> getAllReviews(Long productId) throws ProductException;
    
}

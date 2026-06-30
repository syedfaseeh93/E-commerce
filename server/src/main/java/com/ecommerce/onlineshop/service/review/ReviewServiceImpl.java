package com.ecommerce.onlineshop.service.review;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.model.product.Product;
import com.ecommerce.onlineshop.model.ratingAndreview.Review;
import com.ecommerce.onlineshop.model.user.User;
import com.ecommerce.onlineshop.repository.reviewAndrating.ReviewRepository;
import com.ecommerce.onlineshop.requests.ReviewRequest;
import com.ecommerce.onlineshop.service.product.ProductService;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    ProductService productService;
    @Autowired
    ReviewRepository reviewRepository;

    @Override
    public Review createReview(ReviewRequest req, User user) throws ProductException {
        Product product = productService.findProductById(req.getProductId());

    if(product==null){
        throw new ProductException("Product not Found with ID"+req.getProductId());
    }
        Review review = new Review();
        review.setUser(user);
        review.setProduct(product);
        review.setReview(req.getReview());
        review.setCreatedAt(LocalDateTime.now());
        product.getReviews().add(review);

        Review savedReview = reviewRepository.save(review);
        
        return savedReview;
    }

    @Override
    public List<Review> getAllReviews(Long productId) throws ProductException {
        return reviewRepository.getAllProductsReviews(productId);
    }

}

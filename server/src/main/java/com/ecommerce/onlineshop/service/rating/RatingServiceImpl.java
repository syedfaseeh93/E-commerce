package com.ecommerce.onlineshop.service.rating;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.product.Product;
import com.ecommerce.onlineshop.model.ratingAndreview.Rating;
import com.ecommerce.onlineshop.model.user.User;
import com.ecommerce.onlineshop.repository.reviewAndrating.RatingRepository;
import com.ecommerce.onlineshop.requests.RatingRequest;
import com.ecommerce.onlineshop.service.product.ProductService;
import com.ecommerce.onlineshop.service.user.UserService;

@Service
public class RatingServiceImpl implements RatingService {
    @Autowired
    private ProductService productService;
    @Autowired
    private RatingRepository ratingRepository;
    @Autowired
    private UserService userService;

    @Override
    public Rating createRating(RatingRequest req, String jwt) 
        throws ProductException, UserException {

    User user = userService.findUserProfileByJWT(jwt);

    Product product = productService.findProductById(req.getProductId());

    Rating rating = new Rating();
    rating.setUser(user);
    rating.setProduct(product);
    rating.setRating(req.getRating());
    rating.setCreatedAt(LocalDateTime.now());

    product.getRatings().add(rating);

    return ratingRepository.save(rating);
}

    @Override
    public List<Rating> getAllProductsRatings(Long productId) {
        return ratingRepository.getAllProductsRatings(productId);
    }
    
}

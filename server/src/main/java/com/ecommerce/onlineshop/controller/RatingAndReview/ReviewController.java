package com.ecommerce.onlineshop.controller.RatingAndReview;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.ratingAndreview.Review;
import com.ecommerce.onlineshop.model.user.User;
import com.ecommerce.onlineshop.requests.ReviewRequest;
import com.ecommerce.onlineshop.service.review.ReviewService;
import com.ecommerce.onlineshop.service.user.UserService;


@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private UserService userService;
    @Autowired
    private ReviewService reviewService;

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getProductReviews(@PathVariable Long productId) throws ProductException{

        List<Review> reviews = reviewService.getAllReviews(productId);

        return new ResponseEntity<>(reviews,HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Review> createReview(@RequestBody ReviewRequest req,@RequestHeader("Authorization") String jwt) throws ProductException,UserException {
        User user=userService.findUserProfileByJWT(jwt);
        Review review=reviewService.createReview(req, user);        
        return new ResponseEntity<>(review,HttpStatus.CREATED);
    }
    
}

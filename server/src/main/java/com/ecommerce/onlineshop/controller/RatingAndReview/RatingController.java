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
import com.ecommerce.onlineshop.model.ratingAndreview.Rating;
import com.ecommerce.onlineshop.requests.RatingRequest;
import com.ecommerce.onlineshop.service.rating.RatingService;


@RestController
@RequestMapping("/api/rating")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @PostMapping("/create")
    public ResponseEntity<Rating> createRating(@RequestBody RatingRequest req, @RequestHeader("Authorization") String jwt) throws ProductException, UserException {
        Rating rating = ratingService.createRating(req, jwt);
        return new ResponseEntity<>(rating, HttpStatus.CREATED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Rating>> getProductRatings(@PathVariable Long productId) throws ProductException{

        List<Rating> ratings=ratingService.getAllProductsRatings(productId);

        return new ResponseEntity<>(ratings,HttpStatus.OK);

    }

}

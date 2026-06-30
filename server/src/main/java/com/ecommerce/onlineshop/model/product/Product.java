package com.ecommerce.onlineshop.model.product;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.ecommerce.onlineshop.model.ratingAndreview.Rating;
import com.ecommerce.onlineshop.model.ratingAndreview.Review;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private int price;

    private int discountedPrice;
    private int discountPercent;
    private int quantity;

    public int getQuantity() {
        return quantity;
    }


    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    private String brand;
    private String color;
    private String imageURL;

    @Embedded
    @ElementCollection
    @Column(name="sizes")
    private Set<Size> sizes=new HashSet<>();

    @OneToMany(mappedBy="product",cascade=CascadeType.ALL,orphanRemoval=true, fetch = FetchType.EAGER)
    private List<Review> reviews=new ArrayList<>();
   
    @OneToMany(mappedBy="product",cascade=CascadeType.ALL,orphanRemoval=true)
    private List<Rating> ratings=new ArrayList<>();

    private int numRatings;

    @ManyToOne
    @JoinColumn(name="category_id")
    private Category category;

    private LocalDateTime createdAt;

    public Product() {
    }


    public Product(Long id,int quantity,String brand, Category category, String color, LocalDateTime createdAt, String description, int discountPercent, int discountedPrice, String imageURL, int numRatings, int price, String title) {
        this.brand = brand;
        this.category = category;
        this.color = color;
        this.createdAt = createdAt;
        this.description = description;
        this.discountPercent = discountPercent;
        this.discountedPrice = discountedPrice;
        this.imageURL = imageURL;
        this.numRatings = numRatings;
        this.price = price;
        this.title = title;
        this.id=id;
        this.quantity = quantity;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id=id;
    }
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(int discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public int getDiscountPercent() {
        return discountPercent;
    }

    public void setDiscountPercent(int discountPercent) {
        this.discountPercent = discountPercent;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public Set<Size> getSizes() {
        return sizes;
    }

    public void setSizes(Set<Size> sizes) {
        this.sizes = sizes;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    public int getNumRatings() {
        return numRatings;
    }

    public void setNumRatings(int numRatings) {
        this.numRatings = numRatings;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    

}

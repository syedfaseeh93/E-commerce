package com.ecommerce.onlineshop.requests;

import java.util.HashSet;
import java.util.Set;

import com.ecommerce.onlineshop.model.product.Size;

public class createProductRequest {

    private String title;

    private int price;

    private int discountedPrice;

    private int discountedPercent;
    
    private int quantity;

    private String description;

    private String brand;

    private String color;

    private Set<Size> sizes=new HashSet<>();

    private String imageUrl;

    private String firstLevelCategory;
    private String secondLevelCategory;
    private String thirdLevelCategory;
    
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
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
    public int getDiscountedPercent() {
        return discountedPercent;
    }
    public void setDiscountedPercent(int discountedPercent) {
        this.discountedPercent = discountedPercent;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
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
    public Set<Size> getSizes() {
        return sizes;
    }
    public void setSizes(Set<Size> sizes) {
        this.sizes = sizes;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public String getFirstLevelCategory() {
        return firstLevelCategory;
    }
    public void setFirstLevelCategory(String firstLevelCategory) {
        this.firstLevelCategory = firstLevelCategory;
    }
    public String getSecondLevelCategory() {
        return secondLevelCategory;
    }
    public void setSecondLevelCategory(String secondLevelCategory) {
        this.secondLevelCategory = secondLevelCategory;
    }
    public String getThirdLevelCategory() {
        return thirdLevelCategory;
    }
    public void setThirdLevelCategory(String thirdLevelCategory) {
        this.thirdLevelCategory = thirdLevelCategory;
    }

}

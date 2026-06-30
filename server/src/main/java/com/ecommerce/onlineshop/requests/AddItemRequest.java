package com.ecommerce.onlineshop.requests;

public class AddItemRequest {

    private Long productId;
    private String size;

    public AddItemRequest() {
    }

    public AddItemRequest(Long productId, String size) {
        this.productId = productId;
        this.size = size;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

}

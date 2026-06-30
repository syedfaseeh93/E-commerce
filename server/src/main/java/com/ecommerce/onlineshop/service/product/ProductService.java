package com.ecommerce.onlineshop.service.product;

import java.util.List;

import org.springframework.data.domain.Page;

import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.model.product.Product;
import com.ecommerce.onlineshop.requests.createProductRequest;

public interface ProductService {
    public Product createProduct(createProductRequest req);
    public List<Product> getAll();
    public String deleteProduct(Long productId) throws ProductException;
    public Product updateProduct(Long productId,Product req) throws ProductException;
    public Product findProductById(Long productId) throws ProductException;
    public Page<Product> getAllProducts(String Category,List<String> colors,List<String> sizes,Integer minPrice,Integer maxPrice,Integer minDiscount,String sort,String stock,Integer pageNumber,Integer pageSize);
}

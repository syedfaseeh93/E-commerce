package com.ecommerce.onlineshop.controller.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.model.product.Product;
import com.ecommerce.onlineshop.service.product.ProductService;


@RestController
@RequestMapping("/api/products")
public class ProductController {
    
    @Autowired
    ProductService productService;

    @GetMapping("")
    public ResponseEntity<Page<Product>> findProductByCategoryHandler
    (@RequestParam(required = false) String category,
        @RequestParam(required = false) List<String> colors,
        @RequestParam(required = false) List<String> sizes,
        @RequestParam(required = false) Integer minPrice,
        @RequestParam(required = false) Integer maxPrice,
        @RequestParam(required = false) Integer minDiscount,
        @RequestParam(defaultValue = "price_low") String sort,
        @RequestParam(defaultValue = "in_stock") String stock,
        @RequestParam(defaultValue = "0") Integer pageNumber,
        @RequestParam(defaultValue = "10") Integer pageSize) {

        Page<Product> res=productService.getAllProducts(category, colors, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize);

        return new ResponseEntity<>(res,HttpStatus.ACCEPTED);
    }
    
    
    @GetMapping("/id/{productId}")
    public ResponseEntity<Product> findProduct(@PathVariable Long productId) throws ProductException{

        Product product=productService.findProductById(productId);
        return new ResponseEntity<>(product,HttpStatus.ACCEPTED);
    }

    @GetMapping("/allProducts")
    public List<Product> getAllProducts() {
        List<Product> products= productService.getAll();
        return products;
    }
    
    
}

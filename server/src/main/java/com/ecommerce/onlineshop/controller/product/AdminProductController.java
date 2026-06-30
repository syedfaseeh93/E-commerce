package com.ecommerce.onlineshop.controller.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.model.product.Product;
import com.ecommerce.onlineshop.requests.createProductRequest;
import com.ecommerce.onlineshop.response.ApiResponse;
import com.ecommerce.onlineshop.service.product.ProductService;




@RestController
@RequestMapping("/api/admin/product")
public class AdminProductController { 
    
    @Autowired
    private ProductService productService;


    @PostMapping("/")
    public ResponseEntity<Product> createProduct(@RequestBody createProductRequest req) {
        String brand=req.getBrand();
        System.out.println(brand);
        Product product=productService.createProduct(req);
        return new ResponseEntity<>(product,HttpStatus.CREATED);
    }

    @DeleteMapping("/{productId}/deleteProduct")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long productId) throws ProductException{

        productService.deleteProduct(productId);
        ApiResponse res=new ApiResponse();
        res.setMessage("Product Deleted");
        res.setStatus(true);

        return new ResponseEntity<>(res,HttpStatus.OK);
    }
    
    @PutMapping("/{productId}/updateProduct")
    public ResponseEntity<Product> putMethodName(@PathVariable Long productId, @RequestBody Product req) throws ProductException{
       
        Product product=productService.updateProduct(productId, req); 
        
        return new ResponseEntity<>(product,HttpStatus.OK);
    }


    @PostMapping("/creates")
    public ResponseEntity<ApiResponse> createMultipleProducts(@RequestBody createProductRequest[] req) {
        
        for(createProductRequest product:req){
            productService.createProduct(product);
        }

        ApiResponse res=new ApiResponse();
        res.setMessage("products Created");
        res.setStatus(true);

        return new ResponseEntity<>(res,HttpStatus.CREATED);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> findByProductId(@PathVariable Long productId) throws ProductException {
        
        Product product=productService.findProductById(productId);

        return new ResponseEntity<>(product,HttpStatus.CREATED);

    }
    
    
}

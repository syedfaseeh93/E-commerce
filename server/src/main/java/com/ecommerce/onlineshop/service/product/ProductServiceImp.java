package com.ecommerce.onlineshop.service.product;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.ecommerce.onlineshop.exception.ProductException;
import com.ecommerce.onlineshop.model.product.Category;
import com.ecommerce.onlineshop.model.product.Product;
import com.ecommerce.onlineshop.repository.product.CategoryRepository;
import com.ecommerce.onlineshop.repository.product.ProductRepository;
import com.ecommerce.onlineshop.requests.createProductRequest;

@Service
public class ProductServiceImp implements ProductService {

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    ProductRepository productRepository;

    @Override
    public Product createProduct(createProductRequest req) {

        Category topLevel=categoryRepository.findByName(req.getFirstLevelCategory());

        if(topLevel==null){
            Category topLevelCategory=new Category();
            topLevelCategory.setName(req.getFirstLevelCategory());
            topLevelCategory.setLevel(1);

            topLevel=categoryRepository.save(topLevelCategory);
        }

        Category secondLevel=categoryRepository.findByNameAndParent(req.getSecondLevelCategory(),topLevel.getName());

        if(secondLevel==null){
            Category secondLevelCategory=new Category();
            secondLevelCategory.setName(req.getSecondLevelCategory());
            secondLevelCategory.setLevel(2);

            secondLevel=categoryRepository.save(secondLevelCategory);
        }

        Category thirdLevel=categoryRepository.findByNameAndParent(req.getThirdLevelCategory(),secondLevel.getName());

        if(thirdLevel==null){
            Category thirdLevelCategory=new Category();
            thirdLevelCategory.setName(req.getThirdLevelCategory());
            thirdLevelCategory.setLevel(3);

            thirdLevel=categoryRepository.save(thirdLevelCategory);
        }

        Product product=new Product();
        product.setTitle(req.getTitle());
        product.setBrand(req.getBrand());
        product.setColor(req.getColor());
        product.setPrice(req.getPrice());
        product.setSizes(req.getSizes());
        product.setCategory(thirdLevel);
        product.getCategory().setParentCategory(secondLevel);
        product.getCategory().getParentCategory().setParentCategory(topLevel);
        product.setQuantity(req.getQuantity());
        product.setImageURL(req.getImageUrl());
        product.setCreatedAt(LocalDateTime.now());
        product.setDescription(req.getDescription());
        product.setDiscountedPrice(req.getDiscountedPrice());
        product.setDiscountPercent(req.getDiscountedPercent());

        System.out.println(product);
        Product savedProduct =productRepository.save(product);
        return savedProduct;
    }

    @Override
    public String deleteProduct(Long productId) throws ProductException {
        Product product=findProductById(productId);
        product.getSizes().clear();
        productRepository.delete(product);
        return "Deleted Successfully";
    }

    @Override
    public Product updateProduct(Long productId,Product req) throws ProductException {
        Product product=findProductById(productId);
        if(req.getQuantity()!=0){
            product.setQuantity(req.getQuantity());
        }
        return product;
    }

    @Override
    public Product findProductById(Long productId) throws ProductException {
        Optional<Product> optional=productRepository.findById(productId);
        
        if(optional.isPresent()){
            return optional.get();
        }
        
        throw new ProductException("Product not found By Id: "+productId);
    }

    @Override
    public Page<Product> getAllProducts(String category, List<String> colors, List<String> sizes, Integer minPrice,Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {

        Pageable pageable=PageRequest.of(pageNumber, pageSize);

        List<Product> products=productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);

        if(!colors.isEmpty()){
            products=products.stream().filter(p->colors.stream().anyMatch(c->c.equalsIgnoreCase(p.getColor()))).collect(Collectors.toList());
        }

        if(stock!=null){
            if("in_stock".equals(stock)){
                products=products.stream().filter(p->p.getQuantity()>0).collect(Collectors.toList());
            }
            else if("out_of_stock".equals(stock)){
                products=products.stream().filter(p->p.getQuantity()<1).collect(Collectors.toList());
            }
        }

        int startindex=(int) pageable.getOffset();
        int endindex=Math.min(startindex+pageable.getPageSize(),products.size());

        List<Product> pageContent =products.subList(startindex, endindex);

        Page<Product> filteredProduct=new PageImpl<>(pageContent,pageable,products.size());
        return filteredProduct;
    }

    @Override
    public List<Product> getAll() {
        List<Product> products=productRepository.findAll();
        return products;
    }
    
}

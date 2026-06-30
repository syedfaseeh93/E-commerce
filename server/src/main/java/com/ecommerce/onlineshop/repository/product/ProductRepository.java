package com.ecommerce.onlineshop.repository.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecommerce.onlineshop.model.product.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(
            "SELECT p FROM Product p "
            + "WHERE (:category IS NULL OR :category = '' OR LOWER(p.category.name) = LOWER(:category)) "
            + "AND (:minPrice IS NULL OR p.discountedPrice >= :minPrice) "
            + "AND (:maxPrice IS NULL OR p.discountedPrice <= :maxPrice) "
            + "AND (:minDiscount IS NULL OR p.discountPercent >= :minDiscount) "
            + "ORDER BY "
            + "CASE WHEN :sort = 'price_low' THEN p.discountedPrice END ASC, "
            + "CASE WHEN :sort = 'price_high' THEN p.discountedPrice END DESC"
    )
    public List<Product> filterProducts(
            @Param("category") String category,
            @Param("minPrice") Integer minPrice,
            @Param("maxPrice") Integer maxPrice,
            @Param("minDiscount") Integer minDiscount,
            @Param("sort") String sort
    );
}

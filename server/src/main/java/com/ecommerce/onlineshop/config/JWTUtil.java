package com.ecommerce.onlineshop.config;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;

@Component 
public class JWTUtil {
    private final String MySecretKey = "My_super_secretKey_chupake_Rakhna_hai_ye_Key_Ku_7993897591";
    private final SecretKey key = Keys.hmacShaKeyFor(MySecretKey.getBytes());
    private final long EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 7; // 1 DAY

    public String GenerateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public String ExtractUsername(String token) {
        return ExtractClaims(token).getSubject();
    }

    public Claims ExtractClaims(String token) {
    try {   
        return Jwts
                .parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    } catch (ExpiredJwtException | MalformedJwtException | UnsupportedJwtException | SignatureException | IllegalArgumentException e) {
        throw new RuntimeException("Invalid JWT Token");
    }
}

    public boolean validateToken(UserDetails userDetails,String username,String token){
        return username.equals(userDetails.getUsername()) && isTokenValid(token);
    }

    private boolean isTokenValid(String token) {
        return ExtractClaims(token).getExpiration().after(new Date());
    }
}

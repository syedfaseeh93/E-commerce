package com.ecommerce.onlineshop.response;

public class Authresponse {

    private String jwt;
    private String message;

    
    public Authresponse() {
    }

    public Authresponse(String jwt, String message) {
        this.jwt = jwt;
        this.message = message;
    }
    
    public String getJwt() {
        return jwt;
    }
    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    
}

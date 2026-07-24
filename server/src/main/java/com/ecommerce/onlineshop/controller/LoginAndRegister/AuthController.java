package com.ecommerce.onlineshop.controller.LoginAndRegister;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.onlineshop.config.JWTUtil;
import com.ecommerce.onlineshop.exception.UserException;
import com.ecommerce.onlineshop.model.cart.Cart;
import com.ecommerce.onlineshop.model.user.User;
import com.ecommerce.onlineshop.repository.user.UserRepository;
import com.ecommerce.onlineshop.requests.LoginRequest;
import com.ecommerce.onlineshop.response.Authresponse;
import com.ecommerce.onlineshop.service.cart.CartService;
import com.ecommerce.onlineshop.service.user.MyUserDetailsService;

@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://e-commerce-yr6p-beta.vercel.app"
})
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    JWTUtil jwtUtil;
    @Autowired
    MyUserDetailsService myUserDetailsService;
    @Autowired
    CartService cartService;


    @PostMapping("/signup")
    public ResponseEntity<Authresponse> createUserHandler(@RequestBody User user) throws UserException {

        String email = user.getEmail();

        User isEmailExist = userRepository.findByEmail(email);

        if (isEmailExist != null) {
            throw new UserException("Email already exists");
        }

        User createdUser = new User();
        createdUser.setEmail(user.getEmail());
        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
        createdUser.setFirstName(user.getFirstName());
        createdUser.setLastName(user.getLastName());
        createdUser.setMobile(user.getMobile());
        createdUser.setRole("ROLE_USER");

        User savedUser = userRepository.save(createdUser);
        @SuppressWarnings("unused")
        Cart cart=cartService.createCart(savedUser);

        UserDetails userDetails=myUserDetailsService.loadUserByUsername(email);

        Authentication authentication = new UsernamePasswordAuthenticationToken(
                userDetails,null,userDetails.getAuthorities()
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtUtil.GenerateToken(savedUser.getEmail());

        Authresponse authResponse = new Authresponse(token, "Signup Successful");

        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<Authresponse> loginUserHandler(@RequestBody LoginRequest loginRequest) {

        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authenticate(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String Token = jwtUtil.GenerateToken(email);

        Authresponse authResponse = new Authresponse(Token, "Signin Successfull");
        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);

    }

    private Authentication authenticate(String email, String password) {

        UserDetails userDetails = myUserDetailsService.loadUserByUsername(email);

        if (userDetails == null) {
            throw new BadCredentialsException("invalid Username");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}

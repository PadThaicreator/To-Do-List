package com.baisc.todolist.controllers;


import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.baisc.todolist.dtos.LoginDto;
import com.baisc.todolist.dtos.RegisterDto;
import com.baisc.todolist.models.UserModel;
import com.baisc.todolist.repositories.UserRepository;



@RestController
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register( @RequestBody RegisterDto registerDto) {
        
       
        UserModel existingUser = userRepository.findByEmail(registerDto.getEmail()).orElse(null);
        if (existingUser != null) {
            return ResponseEntity.status(HttpStatusCode.valueOf(409)).body("Email already exists");
        }

        UserModel user = new UserModel(registerDto.getUsername() , registerDto.getEmail() , passwordEncoder.encode(registerDto.getPassword()));
        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody LoginDto loginDto) {
        UserModel user = userRepository.findByEmail(loginDto.getEmail()).orElse(null);

        if (user != null && passwordEncoder.matches(loginDto.getPassword(), user.getPassword())) {
            return ResponseEntity.ok(user); 
        } else {
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body("Email or Password Invalid");
        }
    }

}

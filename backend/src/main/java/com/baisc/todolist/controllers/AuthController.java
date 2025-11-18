package com.baisc.todolist.controllers;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.baisc.todolist.dtos.RegisterDto;
import com.baisc.todolist.models.UserModel;
import com.baisc.todolist.repositories.UserRepository;



@RestController
public class AuthController {
    private UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public String register( @RequestBody RegisterDto registerDto) {
        
    
    

        UserModel user = new UserModel();
        user.setUsername(registerDto.getUsername());
        user.setPassword(registerDto.getPassword());
        user.setEmail(registerDto.getEmail());

        userRepository.save(user);

        return "Register Successful";
    }

}

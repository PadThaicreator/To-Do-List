package com.baisc.todolist.models;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
@Table(name = "users")
public class UserModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Long userId;
    
    @Column(nullable=false)
    private String username;
    
    @Column(nullable=false)
    private String password;

    @Column(nullable=false, unique= true)
    private String email;

    public UserModel(Long userId, String username, String email, String password) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
    }

     public UserModel(String username , String email , String password){

        this.username = username;
        this.email = email;
        this.password = password;
    }

    public UserModel() {
    }

    public Long getId() {
        return userId;
    }

    public void setId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}

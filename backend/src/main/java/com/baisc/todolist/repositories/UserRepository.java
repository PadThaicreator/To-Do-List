package com.baisc.todolist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baisc.todolist.models.UserModel;

public interface  UserRepository extends JpaRepository<UserModel, String> {
    
}

package com.baisc.todolist.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.baisc.todolist.models.UserModel;


@Repository
public interface  UserRepository extends JpaRepository<UserModel, String> {
    
    Optional<UserModel> findByEmail(String email);
    Optional<UserModel> findByUsername(String username);
}

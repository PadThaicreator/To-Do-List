package com.baisc.todolist.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.baisc.todolist.models.TaskModel;



@Repository
public interface  TaskRepository extends JpaRepository<TaskModel, String> {
    
    List<TaskModel> findByUserId(Long userId);
    Optional<TaskModel> findByTaskId(Long taskId);
}

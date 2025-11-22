package com.baisc.todolist.controllers;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.baisc.todolist.dtos.TaskDto;
import com.baisc.todolist.models.TaskModel;
import com.baisc.todolist.repositories.TaskRepository;


@RestController
public class TaskController {
    

    private final TaskRepository TaskRepository;

    public TaskController(TaskRepository TaskRepository) {
        this.TaskRepository = TaskRepository;
    }


    @GetMapping("/tasksByUserID/{userId}")
    public List<TaskModel> getTasksByUserId(@PathVariable Long userId) {
        return TaskRepository.findByUserId(userId);
    }

    @PostMapping("/createTask")
    public String createTask(@RequestBody TaskDto task) {


        System.out.println("Content Here " +task.getContent());
        
        TaskModel newTask = new TaskModel(
            task.getTitle(),
            task.getContent(),
            task.getUserId(),
            LocalDateTime.now(),
            task.getSubmitAt(),
            task.getDeadline(),
            "Not Submit"
        );
        TaskRepository.save(newTask);
        return "Task created successfully";
    }



    @PutMapping("/updateTask/{taskId}")
    public ResponseEntity<String> updateTask(@PathVariable Long taskId, @RequestBody TaskDto task) {
        TaskModel existingTask = TaskRepository.findByTaskId(taskId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found"));

        existingTask.setTitle(task.getTitle());
        existingTask.setContent(task.getContent());
        existingTask.setUserId(task.getUserId());
        existingTask.setCreatedAt(task.getCreatedAt());
        existingTask.setSubmitAt(task.getSubmitAt());
        existingTask.setDeadline(task.getDeadline());
        existingTask.setStatus(task.getStatus());

        TaskRepository.save(existingTask);
        return ResponseEntity.ok("Task updated successfully");
            
    }

    @PatchMapping("/updateStatus/{taskId}")
    public ResponseEntity<String> updateStatus(@PathVariable Long taskId) {
        TaskModel existingTask = TaskRepository.findByTaskId(taskId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found"));

        if("Submitted".equals(existingTask.getStatus())){
            existingTask.setStatus("Not Submit");
            existingTask.setSubmitAt(null);
        }
        else if ("Not Submit".equals(existingTask.getStatus())) {
            existingTask.setStatus("Submitted");
            existingTask.setSubmitAt(LocalDateTime.now());
        }

        TaskRepository.save(existingTask);
        

        return ResponseEntity.ok("Status updated successfully");
    }

    @DeleteMapping("/deleteTask/{taskId}")
    public ResponseEntity<String> deleteTask(@PathVariable Long taskId) {
    
        TaskModel existingTask = TaskRepository.findByTaskId(taskId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found"));
        TaskRepository.delete(existingTask);
        return ResponseEntity.ok("Task deleted successfully");
    
    }


}

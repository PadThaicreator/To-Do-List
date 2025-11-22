package com.baisc.todolist.dtos;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;

public class TaskDto {
    
    @NotBlank(message = "Title is required")
    private String title;
    @NotBlank(message = "Content is required")
    private String content;

    @NotBlank(message = "User ID is required")
    private Long userId;
    private LocalDateTime createdAt;
    private LocalDateTime submitAt;
    private LocalDateTime deadline;
    private String status;

    public TaskDto(String title, String content, Long userId, LocalDateTime createdAt, LocalDateTime submitAt, LocalDateTime deadline, String status) {
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.createdAt = createdAt;
        this.submitAt = submitAt;
        this.deadline = deadline;
        this.status = status;
    }

    public TaskDto() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }


    public LocalDateTime getCreatedAt() {
        return createdAt;
    }   
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    public LocalDateTime getSubmitAt() {
        return submitAt;
    }

    public void setSubmitAt(LocalDateTime submitAt) {
        this.submitAt = submitAt;
    }

    public LocalDateTime getDeadline() {
        return deadline;
    }
    public void setDeadline(LocalDateTime deadline) {
        this.deadline = deadline;
    }


    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}

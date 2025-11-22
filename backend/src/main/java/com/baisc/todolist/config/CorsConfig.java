package com.baisc.todolist.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // อนุญาตทุก URL
                .allowedOrigins("http://localhost:4200") // อนุญาต Frontend ของเรา
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"); // อนุญาต Method พวกนี้
    }
}
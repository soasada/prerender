package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @GetMapping
    public Order order() {
        return Order.builder()
                .id(UUID.randomUUID().toString())
                .product(UUID.randomUUID().toString())
                .build();
    }
}

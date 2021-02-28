package com.example.backend;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @SneakyThrows
    @GetMapping
    public Order order() {
        log.info("Calling GET orders");
        Thread.sleep(1000);
        return Order.builder()
                .id(UUID.randomUUID().toString())
                .product(UUID.randomUUID().toString())
                .build();
    }
}

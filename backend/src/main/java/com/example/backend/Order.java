package com.example.backend;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Order {
    private String id;
    private String product;
}

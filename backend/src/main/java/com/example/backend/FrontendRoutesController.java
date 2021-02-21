package com.example.backend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class FrontendRoutesController {
    @RequestMapping(
            method = {RequestMethod.OPTIONS, RequestMethod.GET},
            path = "/about/**"
    )
    public String about() {
        return "forward:/about.html";
    }
}

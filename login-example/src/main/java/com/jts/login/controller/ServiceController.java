// src/main/java/com/jts/login/controller/ServiceController.java
package com.jts.login.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.jts.login.model.Services;
import com.jts.login.service.ServiceService;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular frontend to access
public class ServiceController {

    @Autowired
    private ServiceService serviceService;

    @GetMapping("/service") // Endpoint for retrieving services
    public List<Services> getAllServices() {
        return serviceService.getAllServices();
    }

    @PostMapping("/add-service") // Endpoint for adding a new service
    public Services addService(@RequestBody Services service) {
        return serviceService.addService(service);
    }
}

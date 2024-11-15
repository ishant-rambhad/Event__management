// VenderController.java
package com.jts.login.controller;

import com.jts.login.config.JWTService;
import com.jts.login.model.DashboardResponse;
import com.jts.login.model.LoginRequest;
import com.jts.login.model.LoginResponse;
import com.jts.login.model.SignupRequest;
import com.jts.login.model.SignupResponse;
import com.jts.login.model.Vendor;
import com.jts.login.service.VendorService;

import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/vendors") // Added api prefix for better versioning
// @CrossOrigin(origins = "*") // Add if you need CORS support
public class VendorController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTService jwtService;

    private final VendorService vendorService;

    @Autowired
    public VendorController(VendorService vendorService) {
        this.vendorService = vendorService;
    }

    @PostMapping("/Vendor-registration")
    public ResponseEntity<SignupResponse> doRegister(@RequestBody SignupRequest request) {
		return new ResponseEntity<>(vendorService.doRegister(request), HttpStatus.CREATED);
	}
 

    @PostMapping("/Vendor-login")
    public ResponseEntity<LoginResponse> doLogin(@RequestBody LoginRequest request) {
		LoginResponse response = new LoginResponse();

		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

		if (authentication.isAuthenticated()) {
			response.setToken(jwtService.generateToken(request.getUsername()));
		}

		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

    @GetMapping("/Vendor-dashboard")
    public ResponseEntity<DashboardResponse> dashboard() {
        DashboardResponse response = new DashboardResponse();
        response.setResponse("Success");

        System.out.println("Dashboard Response");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}

// VendorService.java (renamed from VenderService)
package com.jts.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jts.login.model.LoginRequest;
import com.jts.login.model.SignupRequest;
import com.jts.login.model.SignupResponse;
import com.jts.login.model.Vendor;
import com.jts.login.repo.VendorRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class VendorService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    private final VendorRepository vendorRepository;

    @Autowired
    public VendorService(VendorRepository vendorRepository) {
        this.vendorRepository = vendorRepository;
    }

    public String doLogin(LoginRequest request) {
        Optional<Vendor> vendors = vendorRepository.findByUsername(request.getUsername());

        if (vendors.isPresent()) {
            return "User details found";
        }

        return "User details not found";
    }

    @Transactional
    public Vendor saveVendor(Vendor vendor) {
        // Add any business logic/validation here
        return vendorRepository.save(vendor);
    }

    public SignupResponse doRegister(SignupRequest request) {
        Optional<Vendor> users = vendorRepository.findByUsername(request.getUsername());

        SignupResponse response = new SignupResponse();

        if (users.isPresent()) {
            response.setResponse("User details Already found");
            return response;
        }

        Vendor vendor = new Vendor();
        vendor.setMobileNumber(request.getMobileNumber());
        System.out.println(request.getMobileNumber());
        vendor.setName(request.getName());
        vendor.setEmail(request.getUsername()); // Assuming `username` is used as the email in this context
        vendor.setPassword(passwordEncoder.encode(request.getPassword()));
        System.out.println("hello");
        System.out.println(request.getPassword());
        System.out.println("Encoded password: " + vendor.getPassword());
        vendor.setProfileImage(request.getProfileImage());
        vendor.setAge(request.getAge());
        vendor.setDateOfBirth(request.getDateOfBirth());
        vendor.setCategory(request.getCategory());
        vendor.setIdentityProof(request.getIdentityProof());
        vendor.setIdentityProofNumber(request.getIdentityProofNumber());
        vendor.setTypeOfService(request.getTypeOfService());
        vendor.setGstNumber(request.getGstNumber());

        vendorRepository.save(vendor);

        response.setResponse("User created with id " + vendor.getId());

        return response;
    }

    // public Optional<Vendor> getVendorByEmailAndPassword(String email, String
    // password) {
    // System.out.println(vendorRepository.findByEmailAndPassword(email, password));
    // return vendorRepository.findByEmailAndPassword(email, password);
    // }

}
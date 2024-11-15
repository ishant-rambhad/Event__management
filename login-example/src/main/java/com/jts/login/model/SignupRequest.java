package com.jts.login.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupRequest {

	private String name;

	private String username;
	
	private String password;
	
	private String address;
	
	private String mobileno;
	
	private String age;

	private String profileImage;
    private String fullName;
    // private String username;
    // private String password;
    private String confirmPassword;
    // private String address;
    private String mobileNumber;
    // private String age; // Changed to String to match the frontend
    private String dateOfBirth;
    private String email;
    private String category;
    private String identityProof;
    private String identityProofNumber;
    private String typeOfService;
    private String gstNumber;

}

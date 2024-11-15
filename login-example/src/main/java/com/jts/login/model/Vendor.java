package com.jts.login.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "vendor_details")
public class Vendor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String profileImage;

    @Column(nullable = false)
    private String name;

    private String age;

    private String dateOfBirth;

    @Column(unique = true, nullable = false)
    private String email;  

    private String category;

    @Column(unique = true, nullable = false)
    private String mobileNumber;


    private String identityProof;

    private String identityProofNumber;

    private String typeOfService;

    private String gstNumber;

    private String password;

    @Transient
    private String confirmPassword;

    @Column(unique = true)
	private String username;
}


// VendorRepository.java (renamed from VenderRepository)
package com.jts.login.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jts.login.model.Vendor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {
    Optional<Vendor> findByUsername(String username);

}
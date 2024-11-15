package com.jts.login.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jts.login.model.Services;

public interface ServiceRepository extends JpaRepository<Services, Long> {
}
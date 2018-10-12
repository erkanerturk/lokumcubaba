package com.erkanerturk.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.erkanerturk.entity.Town;

public interface TownRepository extends JpaRepository<Town, Long> {

}

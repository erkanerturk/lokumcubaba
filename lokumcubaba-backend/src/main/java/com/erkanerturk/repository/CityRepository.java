package com.erkanerturk.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.erkanerturk.entity.City;

public interface CityRepository extends JpaRepository<City, Long> {

}

package com.erkanerturk.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.erkanerturk.entity.Form;

public interface FormRepository extends JpaRepository<Form, Long> {

}

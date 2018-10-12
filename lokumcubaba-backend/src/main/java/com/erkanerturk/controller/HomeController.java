package com.erkanerturk.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.erkanerturk.entity.City;
import com.erkanerturk.entity.District;
import com.erkanerturk.entity.Form;
import com.erkanerturk.entity.Town;
import com.erkanerturk.repository.CityRepository;
import com.erkanerturk.repository.DistrictRepository;
import com.erkanerturk.repository.FormRepository;
import com.erkanerturk.repository.TownRepository;

@RestController
@RequestMapping("/api")
public class HomeController {

	@Autowired
	FormRepository formRepository;

	@Autowired
	CityRepository cityRepository;

	@Autowired
	TownRepository townRepository;

	@Autowired
	DistrictRepository districtRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/create")
	public ResponseEntity<Form> create(@RequestBody Form form) {
		return new ResponseEntity<Form>(formRepository.save(form), HttpStatus.CREATED);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/test")
	public ResponseEntity<String> test(@RequestParam(value = "name", defaultValue = "Erkan Ertürk") String fullName) {
		return new ResponseEntity<String>("Server is running | " + fullName, HttpStatus.OK);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/cities")
	public List<City> getCities() {
		return new ArrayList<>(cityRepository.findAll());
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/towns")
	public List<Town> getTowns(@RequestParam(value = "cityID", defaultValue = "40") int cityID) {
		List<Town> town = new ArrayList<>(townRepository.findAll());
		return town.stream().filter(o -> o.getCityID() == cityID).collect(Collectors.toList());
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/districts")
	public List<District> getDistricts(@RequestParam(value = "townID", defaultValue = "1") int townID) {
		List<District> district = new ArrayList<>(districtRepository.findAll());
		return district.stream().filter(o -> o.getTownID() == townID).collect(Collectors.toList());
	}
}

package com.erkanerturk.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "district")
public class District {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int DistrictID;

	private int TownID;

	private String DistrictName;

	public int getDistrictID() {
		return DistrictID;
	}

	public void setDistrictID(int districtID) {
		DistrictID = districtID;
	}

	public int getTownID() {
		return TownID;
	}

	public void setTownID(int townID) {
		TownID = townID;
	}

	public String getDistrictName() {
		return DistrictName;
	}

	public void setDistrictName(String districtName) {
		DistrictName = districtName;
	}

}

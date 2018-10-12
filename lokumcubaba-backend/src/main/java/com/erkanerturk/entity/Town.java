package com.erkanerturk.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "town")
public class Town {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int TownID;

	private int CityID;

	private String TownName;

	public int getTownID() {
		return TownID;
	}

	public void setTownID(int townID) {
		TownID = townID;
	}

	public int getCityID() {
		return CityID;
	}

	public void setCityID(int cityID) {
		CityID = cityID;
	}

	public String getTownName() {
		return TownName;
	}

	public void setTownName(String townName) {
		TownName = townName;
	}

}

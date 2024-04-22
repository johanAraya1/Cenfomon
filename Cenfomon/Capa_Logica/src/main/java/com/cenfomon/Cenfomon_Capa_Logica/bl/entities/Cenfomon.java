package com.cenfomon.Cenfomon_Capa_Logica.bl.entities;

import java.util.ArrayList;

public class Cenfomon {
    /**
     * Atributos
     */
    int id;
    String name;
    EGender gender;
    float captureRate;
    String imgUrl;
    Location localizacion;
    ArrayList <Evolution> evolutions;

    /**
     * Get and set
     */
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public EGender getGender() {
        return gender;
    }

    public void setGender(EGender gender) {
        this.gender = gender;
    }

    public float getCaptureRate() {
        return captureRate;
    }

    public void setCaptureRate(float captureRate) {
        this.captureRate = captureRate;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Location getLocalizacion() {
        return localizacion;
    }

    public void setLocalizacion(Location localizacion) {
        this.localizacion = localizacion;
    }

    public ArrayList<Evolution> getEvolutions() {
        return evolutions;
    }

    public void setEvolutions(ArrayList<Evolution> evolutions) {
        this.evolutions = evolutions;
    }
}

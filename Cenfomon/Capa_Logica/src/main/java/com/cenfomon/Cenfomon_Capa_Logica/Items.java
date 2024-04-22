package com.cenfomon.Cenfomon_Capa_Logica;

public class Items {

    private int id;
    private String location;
    private float cost;
    private String name;
    private String imgURL;

    public Items(int id, String location, float cost, String name, String imgURL) {
        this.id = id;
        this.location = location;
        this.cost = cost;
        this.name = name;
        this.imgURL = imgURL;
    }

    public  Items(){}
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }
}

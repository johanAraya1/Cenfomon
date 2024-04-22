package com.cenfomon.Cenfomon_Capa_Logica;

public class Potion extends Items {

    private String strenght;
    private int idCenfomon;

    public Potion(int id, String location, float cost, String name, String imgURL, String strenght, int idCenfomon) {
        super(id, location, cost, name, imgURL);
        this.strenght = strenght;
        this.idCenfomon = idCenfomon;
    }

    public Potion(){}

    public String getStrenght() {
        return strenght;
    }

    public void setStrenght(String strenght) {
        this.strenght = strenght;
    }

    public int getIdCenfomon() {
        return idCenfomon;
    }

    public void setIdCenfomon(int idCenfomon) {
        this.idCenfomon = idCenfomon;
    }
}

package com.cenfomon.Cenfomon_Capa_Logica;

public class PiedrasEvolutivas extends Items{

    private int idCenfomon;
    private String type;

    public PiedrasEvolutivas(int id, String location, float cost, String name, String imgURL, int idCenfomon, String type) {
        super(id, location, cost, name, imgURL);
        this.idCenfomon = idCenfomon;
        this.type = type;
    }

    public PiedrasEvolutivas(){}

    public int getIdCenfomon() {
        return idCenfomon;
    }

    public void setIdCenfomon(int idCenfomon) {
        this.idCenfomon = idCenfomon;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

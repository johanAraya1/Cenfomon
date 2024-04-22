package com.cenfomon.Cenfomon_Capa_Logica.bl.entities;

import java.text.DecimalFormat;
import java.util.ArrayList;

public class Evolution {
    /**
     * Atributos
     */
    int id;
    String descripcion;
    DecimalFormat costCoin;
    ArrayList<Especie> especies;

    /**
     * get and set
     */
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public DecimalFormat getCostCoin() {
        return costCoin;
    }

    public void setCostCoin(DecimalFormat costCoin) {
        this.costCoin = costCoin;
    }

    public ArrayList<Especie> getEspecies() {
        return especies;
    }

    public void setEspecies(ArrayList<Especie> especies) {
        this.especies = especies;
    }
}

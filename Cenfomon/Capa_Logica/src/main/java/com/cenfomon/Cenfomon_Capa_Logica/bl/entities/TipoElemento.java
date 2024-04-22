package com.cenfomon.Cenfomon_Capa_Logica.bl.entities;

import java.util.ArrayList;

public class TipoElemento {

    /**
     * Atributos
     */
    int id;
    String name;
    ArrayList<String> ventajas;
    ArrayList <String> desventajas;

    /**
     * get and set
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

    public ArrayList<String> getVentajas() {
        return ventajas;
    }

    public void setVentajas(ArrayList<String> ventajas) {
        this.ventajas = ventajas;
    }

    public ArrayList<String> getDesventajas() {
        return desventajas;
    }

    public void setDesventajas(ArrayList<String> desventajas) {
        this.desventajas = desventajas;
    }
}

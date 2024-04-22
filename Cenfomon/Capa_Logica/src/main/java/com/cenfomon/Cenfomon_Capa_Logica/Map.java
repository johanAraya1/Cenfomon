package com.cenfomon.Cenfomon_Capa_Logica;

import java.util.ArrayList;

public class Map {

    private int idMapa;
    private Quadrant quadrant;
    private ArrayList<Items> itemsList;

    public Map(int idMapa, Quadrant quadrant, ArrayList<Items> itemsList) {
        this.idMapa = idMapa;
        this.quadrant = quadrant;
        this.itemsList = itemsList;
    }

    public Map(){}

    public int getIdMapa() {
        return idMapa;
    }

    public void setIdMapa(int idMapa) {
        this.idMapa = idMapa;
    }

    public Quadrant getQuadrant() {
        return quadrant;
    }

    public void setQuadrant(Quadrant quadrant) {
        this.quadrant = quadrant;
    }

    public ArrayList<Items> getItemsList() {
        return itemsList;
    }

    public void setItemsList(ArrayList<Items> itemsList) {
        this.itemsList = itemsList;
    }
}

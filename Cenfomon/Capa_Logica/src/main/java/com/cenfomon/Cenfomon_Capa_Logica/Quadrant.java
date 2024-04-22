package com.cenfomon.Cenfomon_Capa_Logica;

public class Quadrant {

    private int idQuadrant;
    private int orderPos;
    private String imgUrl;

    public Quadrant(int idQuadrant, int orderPos, String imgUrl) {
        this.idQuadrant = idQuadrant;
        this.orderPos = orderPos;
        this.imgUrl = imgUrl;
    }

    public int getIdQuadrant() {
        return idQuadrant;
    }

    public void setIdQuadrant(int idQuadrant) {
        this.idQuadrant = idQuadrant;
    }

    public int getOrderPos() {
        return orderPos;
    }

    public void setOrderPos(int orderPos) {
        this.orderPos = orderPos;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}

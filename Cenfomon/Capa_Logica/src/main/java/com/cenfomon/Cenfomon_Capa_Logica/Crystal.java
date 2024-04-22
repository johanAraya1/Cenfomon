package com.cenfomon.Cenfomon_Capa_Logica;

public class Crystal {

    private int idCenfomon;
    private float  catchRate;
    private String type;

    public Crystal(int idCenfomon, float catchRate, String type) {
        this.idCenfomon = idCenfomon;
        this.catchRate = catchRate;
        this.type = type;
    }

    public Crystal(){}

    public int getIdCenfomon() {
        return idCenfomon;
    }

    public void setIdCenfomon(int idCenfomon) {
        this.idCenfomon = idCenfomon;
    }

    public float getCatchRate() {
        return catchRate;
    }

    public void setCatchRate(float catchRate) {
        this.catchRate = catchRate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

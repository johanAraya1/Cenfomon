package com.cenfomon.Cenfomon_Capa_Logica;

public class Expansion extends Items {

    private int beltUpgrade;
    private int idUsuario;


    public Expansion(int id, String location, float cost, String name, String imgURL, int beltUpgrade, int idUsuario) {
        super(id, location, cost, name, imgURL);
        this.beltUpgrade = beltUpgrade;
        this.idUsuario = idUsuario;
    }


    public int getBeltUpgrade() {
        return beltUpgrade;
    }

    public void setBeltUpgrade(int beltUpgrade) {
        this.beltUpgrade = beltUpgrade;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }
}

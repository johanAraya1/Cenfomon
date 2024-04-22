package com.cenfomon.Cenfomon_Capa_Logica;

public class Usuario {

    private int id;
    private String email;
    private String name;
    private Partida partida;
    private String alias;

    public Usuario(int id, String email, String name, Partida partida, String alias) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.partida = partida;
        this.alias = alias;
    }

    private Usuario(){
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Partida getPartida() {
        return partida;
    }

    public void setPartida(Partida partida) {
        this.partida = partida;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }
}

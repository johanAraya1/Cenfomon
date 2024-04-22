package com.cenfomon.Cenfomon_Capa_Logica.bl.entities;

public class Movimiento {
    /**
     * Atributos
     */
    int id;
    String name;
    short puntos;
    ETipoMovimiento tipo;
    TipoElemento tipoElemento;
    Object potenciador;
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

    public short getPuntos() {
        return puntos;
    }

    public void setPuntos(short puntos) {
        this.puntos = puntos;
    }

    public ETipoMovimiento getTipo() {
        return tipo;
    }

    public void setTipo(ETipoMovimiento tipo) {
        this.tipo = tipo;
    }

    public TipoElemento getTipoElemento() {
        return tipoElemento;
    }

    public void setTipoElemento(TipoElemento tipoElemento) {
        this.tipoElemento = tipoElemento;
    }

    public Object getPotenciador() {
        return potenciador;
    }

    public void setPotenciador(Object potenciador) {
        this.potenciador = potenciador;
    }
}

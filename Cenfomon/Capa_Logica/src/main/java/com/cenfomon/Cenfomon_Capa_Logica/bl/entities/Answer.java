package com.cenfomon.Cenfomon_Capa_Logica.bl.entities;

import java.awt.*;
import java.util.Map;

public class Answer {
    /**
     * Atributos
     */
    int id;
    Map<String, Dialog> options;
    /**
     * get and set
     */
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Map<String, Dialog> getOptions() {
        return options;
    }

    public void setOptions(Map<String, Dialog> options) {
        this.options = options;
    }
}

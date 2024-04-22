package com.cenfomon.Cenfomon_Capa_Logica;

import java.util.ArrayList;

public class NPC {
    public int id;
    public ArrayList<Dialog> dialogs;
    public String picture;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ArrayList<Dialog> getDialogs() {
        return dialogs;
    }

    public void setDialogs(ArrayList<Dialog> dialogs) {
        this.dialogs = dialogs;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}

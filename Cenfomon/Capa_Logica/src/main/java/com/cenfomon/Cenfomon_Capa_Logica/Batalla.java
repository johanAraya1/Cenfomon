package com.cenfomon.Cenfomon_Capa_Logica;

import java.util.ArrayList;

public class Batalla {
    public int id;
    public ArrayList<Player> players;
    public float movTime;
    public String state;
    public float expReward;
    public float coinsReward;
    //public Cenfomon cenfomonReward;
    //public ArrayList<Item> itemReward;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ArrayList<Player> getPlayers() {
        return players;
    }

    public void setPlayers(ArrayList<Player> players) {
        this.players = players;
    }

    public float getMovTime() {
        return movTime;
    }

    public void setMovTime(float movTime) {
        this.movTime = movTime;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public float getExpReward() {
        return expReward;
    }

    public void setExpReward(float expReward) {
        this.expReward = expReward;
    }

    public float getCoinsReward() {
        return coinsReward;
    }

    public void setCoinsReward(float coinsReward) {
        this.coinsReward = coinsReward;
    }
}

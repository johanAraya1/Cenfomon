package com.cenfomon.Cenfomon_Capa_Logica.bl.entities;

public class Message {
    /**
     * Atributos
     */
    int id;
    NPC to;
    NPC from;
    Answer reply;
    /**
     * get and set
     */
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public NPC getTo() {
        return to;
    }

    public void setTo(NPC to) {
        this.to = to;
    }

    public NPC getFrom() {
        return from;
    }

    public void setFrom(NPC from) {
        this.from = from;
    }

    public Answer getReply() {
        return reply;
    }

    public void setReply(Answer reply) {
        this.reply = reply;
    }
}

package com.cenfomon.Cenfomon_Capa_Logica;

import org.apache.logging.log4j.message.Message;

import java.util.ArrayList;

public class Dialog {
    public int id;
    public ArrayList<Message> messages;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ArrayList<Message> getMessages() {
        return messages;
    }

    public void setMessages(ArrayList<Message> messages) {
        this.messages = messages;
    }
}

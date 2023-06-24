package com.smgn.enumeration;

public enum Nationality {

    MYANMAR("MYANMAR"),
    THAI("THAI"),
    SINGAPORE("SINGAPORE"),
    VIETNAM("VIETNAM");

    private String label;

    Nationality(String label) {
        this.label = label;
    }

    public String getLabel(){
        return label;
    }
}

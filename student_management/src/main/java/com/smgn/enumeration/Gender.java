package com.smgn.enumeration;

public enum Gender {

    MALE("MALE"), FEMALE("FEMALE");

    private String label;

    Gender(String label) {
        this.label = label;
    }

    public String getLabel(){
        return label;
    }
}

package com.example.library.dto;

import java.io.Serializable;

public class GenreDto implements Serializable {
    private Long id;
    private String name;
    private Boolean allowedForChildren = false;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getAllowedForChildren() {
        return allowedForChildren;
    }

    public void setAllowedForChildren(Boolean allowedForChildren) {
        this.allowedForChildren = allowedForChildren;
    }
}

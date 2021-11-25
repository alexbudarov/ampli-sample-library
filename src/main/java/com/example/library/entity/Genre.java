package com.example.library.entity;

import javax.persistence.*;

@Entity
@Table(name = "genre")
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "allowed_for_children", nullable = false)
    private boolean allowedForChildren = false;

    public boolean getAllowedForChildren() {
        return allowedForChildren;
    }

    public void setAllowedForChildren(boolean allowedForChildren) {
        this.allowedForChildren = allowedForChildren;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
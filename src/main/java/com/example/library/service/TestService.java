package com.example.library.service;

import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.stereotype.Service;

@GraphQLApi
@Service
public class TestService {
    @GraphQLQuery(name = "hello")
    public String helloWorld() {
        return "Hello world";
    }
}

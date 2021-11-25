package com.example.library.service;

import com.example.library.dto.AuthorDto;
import com.example.library.entity.Author;
import com.example.library.repository.AuthorRepository;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLNonNull;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@GraphQLApi
@Service
public class AuthorService {
    private final AuthorRepository crudRepository;
    private final ModelMapper mapper;

    public AuthorService(AuthorRepository crudRepository, ModelMapper mapper) {
        this.crudRepository = crudRepository;
        this.mapper = mapper;
    }

    @GraphQLMutation(name = "deleteAuthor")
    @Transactional
    public void delete(@GraphQLNonNull Long id) {
        Author entity = crudRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));

        crudRepository.delete(entity);
    }

    @GraphQLQuery(name = "listAuthors")
    @Transactional
    public List<AuthorDto> findAll() {
        return crudRepository.findAll().stream()
                .map(e -> mapper.map(e, AuthorDto.class))
                .collect(Collectors.toList());
    }

    @GraphQLQuery(name = "findAuthor")
    @Transactional
    public AuthorDto findById(@GraphQLNonNull Long id) {
        return crudRepository.findById(id)
                .map(e -> mapper.map(e, AuthorDto.class))
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));
    }

    @GraphQLMutation(name = "updateAuthor")
    @Transactional
    public AuthorDto update(AuthorDto input) {
        if (input.getId() != null) {
            if (!crudRepository.existsById(input.getId())) {
                throw new RuntimeException(
                        String.format("Unable to find entity by id: %s ", input.getId()));
            }
        }
        Author entity = new Author();
        mapper.map(input, entity);
        entity = crudRepository.save(entity);

        return mapper.map(entity, AuthorDto.class);
    }
}
package com.example.library.service;

import com.example.library.dto.GenreDto;
import com.example.library.entity.Genre;
import com.example.library.repository.GenreRepository;
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
public class GenreService {
    private final GenreRepository crudRepository;
    private final ModelMapper mapper;

    public GenreService(GenreRepository crudRepository, ModelMapper mapper) {
        this.crudRepository = crudRepository;
        this.mapper = mapper;
    }

    @GraphQLMutation(name = "deleteGenre")
    @Transactional
    public void delete(@GraphQLNonNull Long id) {
        Genre entity = crudRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));

        crudRepository.delete(entity);
    }

    @GraphQLQuery(name = "listGenres")
    @Transactional
    public List<GenreDto> findAll() {
        return crudRepository.findAll().stream()
                .map(e -> mapper.map(e, GenreDto.class))
                .collect(Collectors.toList());
    }

    @GraphQLQuery(name = "findGenre")
    @Transactional
    public GenreDto findById(@GraphQLNonNull Long id) {
        return crudRepository.findById(id)
                .map(e -> mapper.map(e, GenreDto.class))
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));
    }

    @GraphQLMutation(name = "updateGenre")
    @Transactional
    public GenreDto update(GenreDto input) {
        if (input.getId() != null) {
            if (!crudRepository.existsById(input.getId())) {
                throw new RuntimeException(
                        String.format("Unable to find entity by id: %s ", input.getId()));
            }
        }
        Genre entity = new Genre();
        mapper.map(input, entity);
        entity = crudRepository.save(entity);

        return mapper.map(entity, GenreDto.class);
    }
}
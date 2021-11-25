package com.example.library.service;

import com.example.library.dto.PublisherDto;
import com.example.library.entity.Publisher;
import com.example.library.repository.PublisherRepository;
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
public class PublisherService {
    private final PublisherRepository crudRepository;
    private final ModelMapper mapper;

    public PublisherService(PublisherRepository crudRepository, ModelMapper mapper) {
        this.crudRepository = crudRepository;
        this.mapper = mapper;
    }

    @GraphQLMutation(name = "deletePublisher")
    @Transactional
    public void delete(@GraphQLNonNull String id) {
        Publisher entity = crudRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));

        crudRepository.delete(entity);
    }

    @GraphQLQuery(name = "listPublishers")
    @Transactional
    public List<PublisherDto> findAll() {
        return crudRepository.findAll().stream()
                .map(e -> mapper.map(e, PublisherDto.class))
                .collect(Collectors.toList());
    }

    @GraphQLQuery(name = "findPublisher")
    @Transactional
    public PublisherDto findById(@GraphQLNonNull String id) {
        return crudRepository.findById(id)
                .map(e -> mapper.map(e, PublisherDto.class))
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));
    }

    @GraphQLMutation(name = "updatePublisher")
    @Transactional
    public PublisherDto update(PublisherDto input) {
        if (input.getId() != null) {
            if (!crudRepository.existsById(input.getId())) {
                throw new RuntimeException(
                        String.format("Unable to find entity by id: %s ", input.getId()));
            }
        }
        Publisher entity = new Publisher();
        mapper.map(input, entity);
        entity = crudRepository.save(entity);

        return mapper.map(entity, PublisherDto.class);
    }
}
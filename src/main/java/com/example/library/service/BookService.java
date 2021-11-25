package com.example.library.service;

import com.example.library.dto.BookDto;
import com.example.library.dto.BookFilterDto;
import com.example.library.entity.Book;
import com.example.library.repository.BookRepository;
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
public class BookService {
    private final BookRepository crudRepository;
    private final ModelMapper mapper;

    public BookService(BookRepository crudRepository, ModelMapper mapper) {
        this.crudRepository = crudRepository;
        this.mapper = mapper;
    }

    @GraphQLMutation(name = "deleteBook")
    @Transactional
    public void delete(@GraphQLNonNull String id) {
        Book entity = crudRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));

        crudRepository.delete(entity);
    }

    @GraphQLQuery(name = "listBooks")
    @Transactional
    public List<BookDto> findAll(BookFilterDto filterDto) {
        List<Book> books;
        if (filterDto.getFilter() == null || filterDto.getFilter().isBlank()) {
            books = crudRepository.findAll();
        } else {
            books = crudRepository.findByTitleContainsOrGenre_NameContainsAllIgnoreCase(
                    filterDto.getFilter(), filterDto.getFilter());
        }
        return books.stream()
                .map(e -> mapper.map(e, BookDto.class))
                .collect(Collectors.toList());
    }

    @GraphQLQuery(name = "findBook")
    @Transactional
    public BookDto findById(@GraphQLNonNull String id) {
        return crudRepository.findById(id)
                .map(e -> mapper.map(e, BookDto.class))
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));
    }

    @GraphQLMutation(name = "updateBook")
    @Transactional
    public BookDto update(BookDto input) {
        Book entity = new Book();
        mapper.map(input, entity);
        entity = crudRepository.save(entity);

        return mapper.map(entity, BookDto.class);
    }
}
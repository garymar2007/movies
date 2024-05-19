package com.gary.movies.controller;

import com.gary.movies.models.Movie;
import com.gary.movies.service.MovieService;
import jakarta.websocket.server.PathParam;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {

        return new ResponseEntity<List<Movie>>(movieService.getAllMovies(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    //NB: @PathParam is from JAX-RS and @PathVariable is from Spring.  So @PathParam is not recognized by Spring,
    // but only by JAX-RS for REST web service, whist @PathVariable is recognized by Spring and REST API.
    public ResponseEntity<Optional<Movie>> getMovieById(@PathVariable("id") ObjectId id) {
        return new ResponseEntity<Optional<Movie>>(movieService.getMovieById(id), HttpStatus.OK);
    }
}

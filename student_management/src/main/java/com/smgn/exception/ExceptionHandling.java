package com.smgn.exception;

import com.smgn.domain.CustomHttpResponse;
import com.smgn.exception.domain.DataNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.time.LocalDateTime;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@RestControllerAdvice
public class ExceptionHandling {

    @ExceptionHandler(NoHandlerFoundException.class)
    public ResponseEntity<CustomHttpResponse> noHandlerFoundException() {
        return createHttpResponse(BAD_REQUEST, "No such path found");
    }

    @ExceptionHandler(DataNotFoundException.class)
    public ResponseEntity<CustomHttpResponse> dataNotFoundException(Exception e) {
        return createHttpResponse(BAD_REQUEST, e.getMessage());
    }

    private ResponseEntity<CustomHttpResponse> createHttpResponse(HttpStatus httpStatus, String message){
        CustomHttpResponse httpResponse = new CustomHttpResponse(
                LocalDateTime.now(), httpStatus.value(), httpStatus.getReasonPhrase(), message
        );
        return new ResponseEntity<>(httpResponse, httpStatus);
    }
}

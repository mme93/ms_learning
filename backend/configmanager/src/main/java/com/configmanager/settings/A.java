package com.configmanager.settings;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class A {

    @GetMapping("/ping")
    public ResponseEntity<String>getPing(){
        return new ResponseEntity<>("Ping", HttpStatus.OK);
    }

}

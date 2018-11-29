package com.test.Controller;

import com.test.Entity.Restauracja;
import com.test.Service.RestauracjeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.Collection;

@RestController
@RequestMapping("/restauracje")
public class RestauracjaController {

    @Autowired
    private RestauracjeService restauracjeService;

    @RequestMapping(method = RequestMethod.GET)
    public Collection<Restauracja> getAllRestauracje() {
        return restauracjeService.getAllRestauracje();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Restauracja getRestauracjaById(@PathVariable("id") int id){
        return restauracjeService.getRestauracjaById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteRestauracjaById(@PathVariable("id") int id){
        restauracjeService.removeRestauracjaById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateRestauracja(@RequestBody Restauracja restauracja){
        restauracjeService.updateRestauracja(restauracja);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void insertRestauracja(@RequestBody Restauracja restauracja) {
        restauracjeService.insertRestauracja(restauracja);
    }

}

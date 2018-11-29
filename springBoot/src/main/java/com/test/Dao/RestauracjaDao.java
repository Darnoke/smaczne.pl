package com.test.Dao;

import com.test.Entity.Restauracja;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class RestauracjaDao implements xRestauracjaDao {

    private static Map<Integer, Restauracja> restauracje;

    static {

        restauracje = new HashMap<Integer, Restauracja>(){

            {
                put(1, new Restauracja(1, "Flamingo", "Wolnosci"));
                put(2, new Restauracja(2, "Francuska", "Rynek"));
                put(3, new Restauracja(3, "Zolw", "Zadupie"));
            }
        };
    }

    @Override
    public Collection<Restauracja> getAllRestauracje(){

        return this.restauracje.values();
    }

    @Override
    public Restauracja getRestauracjaById(int id){
        return this.restauracje.get(id);
    }

    @Override
    public void removeRestauracjaById(int id) {
        this.restauracje.remove(id);
    }

    @Override
    public void updateRestauracja(Restauracja restauracja){
        Restauracja s = restauracje.get(restauracja.getId());
        s.setAddress(restauracja.getAddress());
        s.setName(restauracja.getName());
        restauracje.put(restauracja.getId(), restauracja);
    }

    @Override
    public void insertRestauracjaToBb(Restauracja restauracja) {
        this.restauracje.put(restauracja.getId(), restauracja);
    }
}

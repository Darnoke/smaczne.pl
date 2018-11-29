package com.test.Dao;

import com.test.Entity.Restauracja;

import java.util.Collection;

public interface xRestauracjaDao {
    Collection<Restauracja> getAllRestauracje();

    Restauracja getRestauracjaById(int id);

    void removeRestauracjaById(int id);

    void updateRestauracja(Restauracja restauracja);

    void insertRestauracjaToBb(Restauracja restauracja);
}

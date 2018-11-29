package com.test.Service;

import com.test.Dao.xRestauracjaDao;
import com.test.Entity.Restauracja;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class RestauracjeService {

    @Autowired
    private xRestauracjaDao xRestauracjaDao;

    public Collection<Restauracja> getAllRestauracje(){
        return xRestauracjaDao.getAllRestauracje();
    }

    public Restauracja getRestauracjaById(int id){
        return this.xRestauracjaDao.getRestauracjaById(id);
    }

    public void removeRestauracjaById(int id){
        this.xRestauracjaDao.removeRestauracjaById(id);
    }

    public void updateRestauracja(Restauracja restauracja){
        this.xRestauracjaDao.updateRestauracja(restauracja);
    }

    public void insertRestauracja(Restauracja restauracja) {
        xRestauracjaDao.insertRestauracjaToBb(restauracja);
    }
}

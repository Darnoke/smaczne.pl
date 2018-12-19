<template>
  <div class="home">
    <div class="header">
      <div class="header-left">
        <img src="https://toppng.com/public/uploads/preview/hamburger-11526063752qxn1oxfiyv.png" />
        <h1>Smaczne.pl</h1>
      </div>
      <div v-if="!$state.isLogged" class="header-right">
        <i @click="cartView()" class="fas fa-shopping-cart">
          <at-badge :value="$state.cart.length"></at-badge>
        </i>
        <at-button type="primary" @click="login()">Zaloguj się</at-button>
      </div>
      <div v-if="$state.isLogged" class="header-right">
        <i @click="cartView()" class="fas fa-shopping-cart">
          <at-badge :value="$state.cart.length"></at-badge>
        </i>
        <span>Witaj, {{ $state.username }} </span>
        <at-button type="primary" @click="$state.isLogged = false;">Wyloguj się</at-button>
      </div>
    </div>
    <div class="main">
      <h2><i class="fas fa-utensils"></i> Restauracje</h2>
      <div class="restaurants">
        <ul v-for="(item, index) in restaurants" :key="index">
          <li @click="gotoRestaurant(item.id)">
            <div class="restaurant-logo">
              <img :src="item.image" />
            </div>
            <div class="restaurant-info">
              <h2>{{ item.name }}</h2>
              <span>{{ item.description }}</span>
              <span>
                <at-rate :show-text="false" :value="item.rate">
                  <span>{{ item.rate }} gwiazdki</span>
                </at-rate>
              </span>
              <span><i class="fas fa-motorcycle"></i> {{ item.delivery_price }}.00 zł / <i class="far fa-clock"></i> {{
                item.delivery_time }} minut</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <small>Copyright &copy; 2018 - Praktykanci</small>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    created() {
      fetch('http://localhost:3000/restaurants')
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.restaurants = json
        });
    },
    data() {
      return {
        restaurants: [],
      }
    },
    methods: {
      login() {
        this.$router.push({
          name: 'Login'
        });
      },
      gotoRestaurant(restaurant_id) {
        this.$router.push({
          name: 'Restaurant',
          params: {
            id: restaurant_id
          }
        });
      },
      cartView() {
        this.$router.push({
          name: 'Cart'
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 100px;
    background-color: #FFC82C;

    .header-left {
      float: left;
      margin-top: 20px;
      margin-left: 35px;

      img {
        width: 50px;
        margin-top: 10px;
      }

      h1 {
        font-size: 30px;
        display: inline;
        padding-left: 25px;
      }
    }

    .header-right {
      .fa-shopping-cart {
        margin-right: 15px;
        font-size: 25px;
      }

      float: right;
      margin-top: 40px;
      margin-right: 15px;
    }
  }

  .main {
    clear: both;
    width: 80%;
    margin-left: 10%;
    margin-top: 2.5%;

    h2 {
      margin-bottom: 10px;
    }

    .restaurants {
      border: 2px solid gray;
      box-shadow: 2px 3px 4px #FFC82C;
      padding: 20px 20px;
      overflow: scroll;
      max-height: 500px;
      overflow-x: hidden;

      ul {
        list-style-type: none;

        .restaurant-logo {
          float: left;
          margin-left: 20%;
          margin-right: 5%;

          img {
            width: 125px;
            height: 125px;
            position: relative;
            top: 10px;
          }
        }

        .restaurant-info {
          padding-bottom: 15px;
          border-bottom: 1px solid gray;
          padding-top: 15px;

          h2 {}

          span {
            display: block;
            padding-bottom: 5px;
          }
        }

        li {
          clear: left;
        }

        li:hover {
          background-color: #D0DEF8;
        }
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #FFC82C;
  }
</style>
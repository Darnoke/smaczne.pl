<template>
    <div class="restaurant">
        <div class="header">
            <div class="header-left">
                <img src="https://toppng.com/public/uploads/preview/hamburger-11526063752qxn1oxfiyv.png" />
                <h1 class="home-button" @click="goToHome()">Smaczne.pl</h1>
            </div>
            <div v-if="!$state.isLogged" class="header-right">
                <i @click="cartView()" class="fas fa-shopping-cart"><at-badge :value="$state.cart.length"></at-badge></i>
                <at-button type="primary" @click="login()">Zaloguj się</at-button>
            </div>
            <div v-if="$state.isLogged" class="header-right">
                <i @click="cartView()" class="fas fa-shopping-cart"><at-badge :value="$state.cart.length"></at-badge></i>
                <span>Witaj, {{ $state.username }} </span>
                <at-button type="primary" @click="$state.isLogged = false;">Wyloguj się</at-button>
            </div>
        </div>
        <div class="info">
            <div class="info-left">
                <img :src="restaurant.image" />
            </div>
            <div class="info-right">
                <h1>{{ restaurant.name }}</h1>
                <span>{{ restaurant.description }}</span>
            </div>
        </div>
        <div class="menu">
            <h2><i class="far fa-newspaper"></i> Menu</h2>
            <div class="menu-details">
                <ul v-for="(item, key, index) in menuItems.menu" :key="index">
                    <li>
                        <div class="menu-left">
                            <h3>{{ item.name }}</h3>
                        </div>
                        <div class="menu-right">
                            <at-button @click="addToCart(item.name, item.price)" type="primary"><i class="fas fa-cart-plus"></i> {{ item.price }}.00 zł</at-button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <small>Copyright &copy; 2018 - Konrad Woźniak</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Restaurant',
        created() {
            fetch('http://localhost:3000/restaurants/' + this.$route.params.id)
            .then(response => response.json())
            .then(json => { console.log(json); this.restaurant = json });

            fetch('http://localhost:3000/menu/' + this.$route.params.id)
            .then(response => response.json())
            .then(json => { console.log(json); this.menuItems = json });
        },
        data() {
            return {
                restaurant: {},
                menuItems: {}
            }
        },
        methods: {
            login() {
                this.$router.push({
                name: 'Login'
                });
            },
            goToHome() {
                this.$router.push({ name: 'Home' });
            },
            addToCart(product, price) {
                this.$state.cart.push({ "name": product, "price": price});
            },
            cartView() {
                this.$router.push({ name: 'Cart' });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        height: 100px;
        background-color: #FFC82C;

        .home-button {
            cursor: pointer;
        }

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
                cursor: pointer;
            }
            float: right;
            margin-top: 40px;
            margin-right: 15px;
        }
    }
    .info {
        background-color: #FFEFC0;
        .info-left {
            display: inline-block;
            img {
                width: 100px;
                height: 100px;
                position: relative;
                left: 50px;
                top: 35px;
            }
        }
        .info-right {
            display: inline-block;
            width: 100%;
            h1 {
                position: relative;
                top: -75px;
                font-size: 50px!important;
                text-align: center;
            }
            span {
                position: absolute;
                top: 200px;
                left: 42%;
                font-size: 26px;
            }
        }
    }
    .menu {
        width: 80%;
        margin-left: 10%;
        h2 {
            margin-top: 15px;
            margin-bottom: 15px;
        }
        .menu-details {
            border: 1px solid gray;
            padding: 20px;
            .menu-left {
                // float: left;
                h3 {
                    margin-right: 60%;
                }
            }
            .menu-right {
                float: right;
                button {
                    position: relative;
                    top: -25px;
                }
            }
            li {
                clear: both;
                padding-bottom: 10px;
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
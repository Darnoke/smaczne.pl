<template>
    <div class="order">
        <div class="header">
            <div class="header-left">
                <img src="https://toppng.com/public/uploads/preview/hamburger-11526063752qxn1oxfiyv.png" />
                <h1 @click="goToHome()">Smaczne.pl</h1>
            </div>
            <div v-if="!$state.isLogged" class="header-right">
                <i class="fas fa-shopping-cart">
                    <at-badge :value="$state.cart.length"></at-badge>
                </i>
                <at-button type="primary" @click="login()">Zaloguj się</at-button>
            </div>
            <div v-if="$state.isLogged" class="header-right">
                <i class="fas fa-shopping-cart">
                    <at-badge :value="$state.cart.length"></at-badge>
                </i>
                <span>Witaj, {{ $state.username }} </span>
                <at-button type="primary" @click="$state.isLogged = false;">Wyloguj się</at-button>
            </div>
        </div>
        <div class="main">
            <h2>Twój koszyk</h2>
            <h3 v-if="$state.cart.length < 1">Brak produktów w koszyku!</h3>
            <ul v-for="(item, index) in $state.cart" :key="index">
                <li>{{index + 1 }} {{ item.name }} - {{ item.price }}.00 zł</li>
            </ul>
            <h3>Razem: {{ totalPrice }}.00 zł</h3>
            <at-button @click="makeOrder()" type="primary">Zamów</at-button>
        </div>
        <div class="footer">
            <small>Copyright &copy; 2018 - Konrad Woźniak</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Order',
        created() {

        },
        data() {
            return {
                cart: []
            }
        },
        computed: {
            totalPrice() {
                let totalPriceTemp = 0;
                for (let i = 0; i < this.$state.cart.length; i++) {
                    totalPriceTemp += Number(this.$state.cart[i].price);
                }
                return totalPriceTemp;
            }
        },
        methods: {
            login() {
                this.$router.push({
                name: 'Login'
                });
            },
            goToHome() {
                this.$router.push({
                    name: 'Home'
                });
            },
            makeOrder() {
                if (!this.$state.isLogged) {
                    this.$Modal.alert({
                    title: 'Błąd',
                    content: 'Aby złozyć zamówienie musisz być zalogowany!',
                    callback: function (action) {
                        return false;
                    }
                    })
                } else {
                    this.$Notify({
                    title: 'Zamówienie zostało złozone!',
                    message: 'Dziękujemy za zlozenie zamówienie - wkrótce otrzymasz szczegóły SMS-owo!'
                    });
                    this.$state.cart = [];
                }
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
                cursor: pointer;
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
        width: 30%;
        margin-left: 35%;
        margin-top: 2.5%;

        h2 {
            margin-bottom: 10px;
        }

        ul {
            margin-bottom: 10px;
        }

        h3 {
            margin-bottom: 10px;
        }

        button {
            width: 200px;
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: #FFC82C;
    }
</style>
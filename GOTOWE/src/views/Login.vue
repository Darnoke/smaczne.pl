<template>
    <div class="login">
        <div class="header">
            <div class="header-left">
                <img src="https://toppng.com/public/uploads/preview/hamburger-11526063752qxn1oxfiyv.png" />
                <h1 @click="goToHome()">Smaczne.pl</h1>
            </div>
            <div v-if="!$state.isLogged" class="header-right">
                <i class="fas fa-shopping-cart">
                    <at-badge :value="$state.cart.length"></at-badge>
                </i>
                <at-button type="primary">Zaloguj się</at-button>
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
            <at-input v-model="login" placeholder="Login"></at-input>
            <at-input v-model="haslo" type="password" placeholder="Hasło"></at-input>
            <at-button @click="attemptLogin()" type="primary">Zaloguj się</at-button>
        </div>
        <div class="footer">
            <small>Copyright &copy; 2018 - Konrad Woźniak</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        created() {
            fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(json => {
            console.log(json);
            this.userdata = json
            });
        },
        data() {
            return {
                userdata: {},
                login: '',
                haslo: '',
            }
        },
        methods: {
            goToHome() {
                this.$router.push({
                    name: 'Home'
                });
            },
            attemptLogin() {
                if (this.login === this.userdata[0].login && this.haslo === this.userdata[0].password) {
                    this.$state.isLogged = true;
                    this.$state.username = this.login;
                    this.$router.push({
                        name: 'Home'
                    });
                } else {
                    this.$Message.error('Nieprawidłowy login lub hasło');
                    this.login = '';
                    this.haslo = '';
                }
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
        width: 80%;
        margin-left: 10%;
        margin-top: 45px;

        button {
            margin-top: 20px;
            width: 50%;
            margin-left: 25%;
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: #FFC82C;
    }
</style>
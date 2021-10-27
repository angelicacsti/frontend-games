<template>
  <body>
    <img class="ui small image" src="../assets/GAMES_logo2.png" alt="Client" />
    <div class="login">
      <h2>Iniciar sesión</h2>
      <form class="ui form" v-on:submit.prevent="processLoginUser">
        <div class="field">
          <input type="text" v-model="user.username" placeholder="Usuario" />
        </div>
        <div class="field">
          <input
            type="password"
            v-model="user.password"
            placeholder="Contraseña"
          />
        </div>
        <button
          class="ui button fluid yellow"
          type="submit"
          v-if="!is_auth"
          v-on:click="loadLogin"
        >
          Entrar
        </button>
      </form>
      <button
        class="ui button fluid grey"
        type="submit"
        @click="$router.push('register')"
      >
        Registrarse
      </button>
    </div>

    <div class="footer">
      <footer class="footer">
        <p>&copy; 2021 Todos los derechos reservados. Grupo 5, P25.</p>
      </footer>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data: function() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    processLoginUser: function() {
      axios
        .post(
          "https://proyecto-games-grupo5-p25.herokuapp.com/login/",
          this.user,
          {
            headers: {},
          }
        )
        .then((result) => {
          let dataLogin = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };
          this.$emit("completedLogin", dataLogin);
        })
        .catch((error) => {
          if (error.response.status == "401")
            alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: black;
  .ui.small.image {
    width: 190px;
    max-width: 300px !important;
    margin: 0 auto;
    margin-left: 43%;
    margin-top: 50px;
  }

  .login {
    text-align: center;
    h2 {
      color: #ffeded;
      margin: 50px 0 30px 0;
    }
    .ui.form {
      max-width: 300px !important;
      margin: 0 auto;
      margin-bottom: 10px;
      input.error {
        border-color: #faa;
        background-color: #ffeded;
      }
    }
  }
  .footer {
    margin: 119.5px;
    text-align: center;
    font-weight: lighter;
    font-size: 15px;
    color: #96a0a0;
  }
  .ui.button.fluid.grey {
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 10px;
  }
}
</style>

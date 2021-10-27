<template>
  <body>
    <img class="ui small image" src="../assets/GAMES_logo2.png" alt="Client" />
    <div class="register">
      <h2>Registro de usuario</h2>
      <form class="ui form" v-on:submit.prevent="processRegister">
        <!-- <div class="field">
          <select class="ui fluid dropdown" v-model="user.typeID">
            <option value="">Tipo de identificación</option>
            <option value="CC">C.C. Cédula de ciudadanía</option>
            <option value="CE">C.E. Cédula de extranjería</option>
          </select>
        </div> -->
        <div class="field">
          <input
            type="text"
            v-model="user.personalID"
            placeholder="Número de identificación"
          />
        </div>
        <div class="field">
          <input
            type="text"
            v-model="user.name"
            placeholder="Nombre completo"
          />
        </div>
        <div class="field">
          <input
            type="email"
            v-model="user.email"
            placeholder="Correo electrónico"
          />
        </div>
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
        <button class="ui button fluid yellow" type="submit">
          Registrarse
        </button>
      </form>
      <button
        class="ui button fluid grey"
        type="submit"
        @click="$router.push('login')"
      >
        Iniciar Sesión
      </button>
    </div>

    <footer class="footer">
      <p>&copy; 2021 Todos los derechos reservados. Grupo 5, P25.</p>
    </footer>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data: function() {
    return {
      user: {
        personalID: "",
        name: "",
        email: "",
        username: "",
        password: "",
        account: {
          lastChangeDate: new Date().toJSON().toString(),
          isActive: true,
        },
      },
    };
  },
  methods: {
    processRegister: function() {
      axios
        .post(
          "https://proyecto-games-grupo5-p25.herokuapp.com/register/",
          this.user,
          {
            headers: {},
          }
        )
        .then((result) => {
          let dataRegister = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };
          this.$emit("completedRegister", dataRegister);
        })
        .catch((error) => {
          console.log(error);
          alert("ERROR: Fallo en el registro.");
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

  .register {
    text-align: center;
    h2 {
      color: #ffeded;
      margin: 50px 0 30px 0;
    }
    .ui.form {
      max-width: 300px;
      margin: 0 auto;
      margin-bottom: 10px;
      input.error {
        border-color: #faa;
        background-color: #ffeded;
      }
    }
    .ui.button.fluid.grey {
      max-width: 300px !important;
      margin: 0 auto;
      margin-bottom: 10px;
    }
  }
  .footer {
    margin: 77.5px;
    text-align: center;
    font-weight: lighter;
    font-size: 15px;
    color: #96a0a0;
  }
}
</style>

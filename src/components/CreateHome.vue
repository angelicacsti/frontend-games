<template>
  <nav>
    <div class="ui container">
      <div class="left menu">
        <router-link class="item" to="/home">
          <img
            class="ui small image"
            src="../assets/GAMES_logo2.png"
            alt="Client"
          />
        </router-link>
      </div>
    </div>
  </nav>

  <div class="ui inverted segment" v-on:submit.prevent="processHome">
    <h4>Ingresar información de la compañía:</h4>
    <div class="ui divider"></div>
    <form class="ui inverted form">
      <h4 class="ui horizontal divider header"></h4>
      <div class="three fields">
        <div class="field">
          <label>NIT</label>
          <input placeholder="NIT" type="text" v-model="home.home_data.nit" />
        </div>
        <div class="field">
          <label>Nombre Comercial</label>
          <input
            placeholder="Nombre Comercial"
            type="text"
            v-model="home.home_data.nombrecomercial"
          />
        </div>
        <div class="field">
          <label>Razón Social</label>
          <input
            placeholder="Razón Social"
            type="text"
            v-model="home.home_data.razonsocial"
          />
        </div>
      </div>
      <div class="three fields">
        <div class="field">
          <label>Dirección</label>
          <input
            placeholder="Dirección"
            type="text"
            v-model="home.home_data.direccion"
          />
        </div>
        <div class="field">
          <label>Municipio</label>
          <input
            placeholder="Municipio"
            type="text"
            v-model="home.home_data.municipio"
          />
        </div>
        <div class="field">
          <label>Departamento</label>
          <input
            placeholder="Departamento"
            type="text"
            v-model="home.home_data.departamento"
          />
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label>Correo de contacto</label>
          <input placeholder="Correo de contacto" type="text" />
        </div>
        <div class="field">
          <label>Teléfono de contacto</label>
          <input placeholder="Teléfono de contacto" type="text" />
        </div>
      </div>

      <button
        type="submit"
        class="ui button fluid blue"
        @click="$router.push('/home')"
      >
        <i class="edit outline icon"></i> Aceptar
      </button>
    </form>
  </div>

  <footer class="footer">
    <p>&copy; 2021 Todos los derechos reservados. Grupo 5, P25.</p>
  </footer>
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from "axios";
export default {
  name: "CreateHome",

  data: function() {
    return {
      home: {
        user_id: 0,
        home_data: {
          id: 0,
          nit: "",
          nombrecomercial: "",
          razonsocial: "",
          direccion: "",
          municipio: "",
          departamento: "",
          email: "",
          telefono: "",
        },
      },
    };
  },

  methods: {
    processHome: async function() {
      if (
        localStorage.getItem("tokenRefresh") === null ||
        localStorage.getItem("tokenAccess") === null
      ) {
        this.$emit("logOut");
        return;
      }

      await this.verifyToken();
      let token = localStorage.getItem("tokenAccess");
      let userId = jwt_decode(token).user_id.toStri;

      this.home.user_id = userId;
      console.log(this.home);
      console.log(token);
      axios
        .post("http://127.0.0.1:8000/home/create/", this.home, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          console.log("Then");
          this.$emit("completedHome");
        })
        .catch((error) => {
          console.log("Error");
          if (error.response.status == "401") {
            alert("Usted no está autorizado para realizar esta operación.");
          } else if (error.response.status == "400") {
            alert(
              "El ingreso no se pudo procesar correctamente.\nRevise todos los datos e intente de nuevo."
            );
          }
        });
    },

    verifyToken: async function() {
      return axios
        .post(
          "http://127.0.0.1:8000/refresh/",
          { refresh: localStorage.getItem("tokenRefresh") },
          { headers: {} }
        )
        .then((result) => {
          console.log("New access token");
          localStorage.setItem("tokenAccess", result.data.access);
        })
        .catch((error) => {
          this.$emit("logOut");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  .ui.container {
    margin: 15px;
    .menu.left {
      width: 80%;
      .ui.image {
        width: 180px;
        top: 40px;
      }
    }
  }
}
.ui.inverted.segment {
  max-width: 1200px;
  margin: 90px;
  text-align: left;
  padding: 2rem;
  border-radius: 10px;

  h3 {
    margin: 50px 0 30px 0;
  }
  .ui.inverted.form {
    max-width: 1200px !important;
    margin: 0 auto;
    margin-bottom: 10px;
  }
}
.footer {
  clear: both;
  position: relative;
  height: 100px;
  margin-top: -30px;
  font-size: 15px;
  color: #112424;
  text-align: center;
}
</style>

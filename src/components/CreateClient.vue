<template>
  <body>
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

    <div class="first menu">
      <div class="ui inverted vertical pointing menu">
        <a class="item" @click="$router.push('/products')">
          Catálogo de productos
        </a>
        <a class="item" @click="$router.push('/ventas')">
          Ventas
        </a>
        <a class="active item" @click="$router.push('/clients')">
          Clientes
        </a>
      </div>
    </div>

    <!-- <div class="second menu">
      <div class="ui compact menu">
        <a class="active blue item" @click="$router.push('/clients/create')">
          <i class="folder open outline icon"></i>
          Agregar
        </a>
        <a class="item" @click="$router.push('/clients/update')">
          <i class="edit outline icon"></i>
          Modificar
        </a>
        <a class="item" @click="$router.push('/clients/delete')">
          <i class="trash alternate outline icon"></i>
          Eliminar
        </a>
      </div>
    </div> -->

    <form class="ui form" v-on:submit.prevent="processClients">
      <h4 class="ui dividing header">
        Agregar datos del cliente:
      </h4>
      <div class="one field">
        <!-- <div class="field">
          <label><font color="white">Tipo de documento</font></label>
          <select class="ui fluid dropdown">
            <option value=""></option>
            <option value="CC">C.C. Cédula de ciudadanía</option>
            <option value="CE">C.E. Cédula de extranjería</option>
          </select> 
        </div> -->
        <div class="field">
          <label><font color="white">Número de documento</font></label>
          <input
            type="text"
            placeholder="Número de documento"
            v-model="clients.clients_data.numerodocumento"
          />
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label><font color="white">Nombre completo</font></label>
          <input
            type="text"
            placeholder="Nombre completo"
            v-model="clients.clients_data.nombrecompleto"
          />
        </div>
        <div class="field">
          <label><font color="white">Dirección</font></label>
          <input
            type="text"
            placeholder="Dirección"
            v-model="clients.clients_data.direccion"
          />
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label><font color="white">Municipio</font></label>
          <input
            type="text"
            placeholder="Municipio"
            v-model="clients.clients_data.municipio"
          />
        </div>
        <div class="field">
          <label><font color="white">Departamento</font></label>
          <input
            type="text"
            placeholder="Departamento"
            v-model="clients.clients_data.departamento"
          />
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label><font color="white">Correo de contacto</font></label>
          <input
            type="text"
            placeholder="Correo electrónico"
            v-model="clients.clients_data.correocontacto"
          />
        </div>
        <div class="field">
          <label><font color="white">Teléfono de contacto</font></label>
          <input
            type="text"
            placeholder="Teléfono de contacto"
            v-model="clients.clients_data.telefonocontacto"
          />
        </div>
      </div>
      <button type="submit" class="ui right floated button">
        <i class="folder open outline icon"></i> Agregar
      </button>
    </form>

    <footer class="footer">
      <p>&copy; 2021 Todos los derechos reservados. Grupo 5, P25.</p>
    </footer>
  </body>
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from "axios";
export default {
  name: "CreateClient",

  data: function() {
    return {
      clients: {
        user_id: 0,
        clients_data: {
          numerodocumento: "",
          nombrecompleto: "",
          direccion: "",
          municipio: "",
          departamento: "",
          correocontacto: "",
          telefonocontacto: "",
        },
      },
    };
  },

  methods: {
    processClients: async function() {
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

      this.clients.user_id = userId;
      console.log(this.clients);
      console.log(token);
      axios
        .post("http://127.0.0.1:8000/clients/create/", this.clients, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          console.log("Then");
          this.$emit("completedClients");
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
body {
  background-color: black;
}
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
.first.menu {
  margin: auto;
  margin-top: 180px;
  margin-left: 70px;
}
.second.menu {
  margin-left: 900px;
  margin-top: -200px;
  margin-bottom: 0;
}
.ui.form {
  h4 {
    color: white;
  }
  max-width: 900px;
  text-align: left;
  border-radius: 6px;
  margin: 70px;
  margin-top: -160px;
  margin-left: 330px;
}

.footer {
  position: absolute;
  width: 100%;
  height: 60px;
  text-align: center;
  font-weight: lighter;
  font-size: 15px;
  color: #96a0a0;
  background-color: black;
}
</style>

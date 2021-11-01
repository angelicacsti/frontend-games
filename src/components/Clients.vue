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

    <div class="second menu">
      <div class="ui compact menu">
        <a class="item" @click="$router.push('/clients/create')">
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
    </div>

    <table class="ui violet table">
      <thead>
        <tr>
          <thead>
            <tr>
              <th></th>
              <th>#</th>
              <th>Número de documento</th>
              <th>Nombre completo</th>
              <th>Dirección</th>
              <th>Municipio</th>
              <th>Departamento</th>
              <th>Correo de contacto</th>
              <th>Teléfono de contacto</th>
            </tr>
          </thead>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="collapsing">
            <div class="ui radio checkbox">
              <input type="radio" /> <label></label>
            </div>
          </td>
          <td>1</td>
          <td>1010800</td>
          <td>Angélica Castiblanco</td>
          <td>calle 91</td>
          <td>Bogotá</td>
          <td>Bogotá D.C.</td>
          <td>angelicac@gmail.com</td>
          <td>3203121233</td>
        </tr>
        <tr>
          <td class="collapsing">
            <div class="ui radio checkbox">
              <input type="radio" /> <label></label>
            </div>
          </td>
          <td>2</td>
          <td>10983290</td>
          <td>Edison Rojas</td>
          <td>Diagonal 50</td>
          <td>Bogotá</td>
          <td>Bogotá D.C.</td>
          <td>Edijas@gmail.com</td>
          <td>3201280239</td>
        </tr>
        <tr>
          <td class="collapsing">
            <div class="ui radio checkbox">
              <input type="radio" /> <label></label>
            </div>
          </td>
          <td>3</td>
          <td>102389408</td>
          <td>Antonio Espriella</td>
          <td>Caracas 45</td>
          <td>Bogotá</td>
          <td>Bogotá D.C.</td>
          <td>Antolla@gmail.com</td>
          <td>320345652</td>
        </tr>
        <tr>
          <td class="collapsing">
            <div class="ui radio checkbox">
              <input type="radio" /> <label></label>
            </div>
          </td>
          <td>4</td>
          <td>102389408</td>
          <td>Antonio Espriella</td>
          <td>Caracas 45</td>
          <td>Bogotá</td>
          <td>Bogotá D.C.</td>
          <td>Antolla@gmail.com</td>
          <td>320345652</td>
        </tr>
        <tr>
          <td class="collapsing">
            <div class="ui radio checkbox">
              <input type="radio" /> <label></label>
            </div>
          </td>
          <td>5</td>
          <td>1023000</td>
          <td>Alma Gamboa</td>
          <td>Calle 127 7ma</td>
          <td>Bogotá</td>
          <td>Bogotá D.C.</td>
          <td>agamboa@gmail.com</td>
          <td>32012345</td>
        </tr>
      </tbody>
    </table>

    <footer class="footer">
      <p>&copy; 2021 Todos los derechos reservados. Grupo 5, P25.</p>
    </footer>
  </body>
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from "axios";
export default {
  name: "Clients",

  data: function() {
    return {
      clients: [],
    };
  },

  methods: {
    getData: async function() {
      if (
        localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") === null
      ) {
        this.$emit("logOut");
        return;
      }

      await this.verifyToken();

      let token = localStorage.getItem("token_access");
      let userId = jwt_decode(token).user_id.toString();

      axios
        .get(`http://127.0.0.1:8000/user/${userId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          this.id = result.data.id;
          this.numerodocumento = result.data.numerodocumento;
          this.nombrecompleto = result.data.nombrecompleto;
          this.direccion = result.data.direccion;
          this.municipio = result.data.municipio;
          this.departamento = result.data.departamento;
          this.correocontacto = result.data.correocontacto;
          this.telefonocontacto = result.data.telefonocontacto;
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },

    verifyToken: function() {
      return axios
        .post(
          "http://127.0.0.1:8000/refresh/",
          { refresh: localStorage.getItem("token_refresh") },
          { headers: {} }
        )
        .then((result) => {
          localStorage.setItem("token_access", result.data.access);
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },
  },
  created: async function() {
    this.getData();
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
.ui.violet.table {
  max-width: 900px;
  text-align: left;
  border-radius: 6px;
  margin: 70px;
  margin-top: 20px;
  margin-left: 330px;
  margin-bottom: 15%;
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

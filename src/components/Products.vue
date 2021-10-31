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
        <a class="active item">
          Catálogo de productos
        </a>
        <a class="item" @click="$router.push('/ventas')">
          Ventas
        </a>
        <a class="item" @click="$router.push('/clients')">
          Clientes
        </a>
      </div>
    </div>

    <div class="second menu">
      <div class="ui compact menu">
        <div class="item" @click="$router.push('/products/create')">
          <i class="folder open outline icon"></i>Agregar
        </div>
        <div class="item" @click="$router.push('/products/update')">
          <i class="edit outline icon"></i>Modificar
        </div>
        <div class="item" @click="$router.push('/products/delete')">
          <i class="trash alternate outline icon"></i> Eliminar
        </div>
      </div>
    </div>

    <table class="ui teal table">
      <thead>
        <tr>
          <th></th>
          <th>#</th>
          <th>Código</th>
          <th>Categoría</th>
          <th>Descripción</th>
          <th>Genero</th>
          <th>Precio</th>
          <th>Unidades disponibles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products">
          <td class="collapsing">
            <div class="ui radio checkbox">
              <input type="radio" /> <label></label>
            </div>
          </td>
          <td>{{ product.id }}</td>
          <td>{{ product.codigoproducto }}</td>
          <td>{{ product.categoriaproducto }}</td>
          <td>{{ product.descripcion }}</td>
          <td>{{ product.genero }}</td>
          <td>{{ product.precio }}</td>
          <td>{{ product.unidadesdisponibles }}</td>
        </tr>
      </tbody>
    </table>

    <div class="footer">
      <footer class="footer">
        <p>&copy; 2021 Todos los derechos reservados. Grupo 5, P25.</p>
      </footer>
    </div>
  </body>
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from "axios";
export default {
  name: "Products",

  data: function() {
    return {
      products: [],
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
          this.codigoproducto = result.data.codigoproducto;
          this.categoriaproducto = result.data.categoriaproducto;
          this.descripcion = result.data.descripcion;
          this.genero = result.data.genero;
          this.precio = result.data.precio;
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
body {
  background-color: black;
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
.ui.teal.table {
  max-width: 900px;
  text-align: left;
  border-radius: 6px;
  margin: 70px;
  margin-top: 20px;
  margin-left: 330px;
  margin-bottom: 23%;
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

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
        <a class="active item" @click="$router.push('/products')">
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

    <!-- <div class="second menu">
      <div class="ui compact menu">
        <a class="active blue item" @click="$router.push('/products/create')">
          <i class="folder open outline icon"></i>
          Agregar
        </a>
        <a class="item" @click="$router.push('/products/update')">
          <i class="edit outline icon"></i>
          Modificar
        </a>
        <a class="item" @click="$router.push('/products/delete')">
          <i class="trash alternate outline icon"></i>
          Eliminar
        </a>
      </div>
    </div> -->

    <form class="ui form" v-on:submit.prevent="processProducts">
      <h4 class="ui dividing header">
        Agregar información del producto:
      </h4>
      <div class="two fields">
        <div class="field">
          <label><font color="white">Código o ID</font></label>
          <input
            type="text"
            placeholder="Código"
            v-model="products.products_data.codigoproducto"
          />
        </div>
        <div class="field">
          <label><font color="white">Categoría de producto</font></label>
          <input
            type="text"
            placeholder="Categoría"
            v-model="products.products_data.categoriaproducto"
          />
          <!-- <select class="ui fluid dropdown">
            <option value=""></option>
            <option value="VJ">Videojuego</option>
            <option value="CS">Consola</option>
          </select> -->
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label><font color="white">Descripción</font></label>
          <input
            type="text"
            placeholder="Descripción"
            v-model="products.products_data.descripcion"
          />
        </div>
        <div class="field">
          <label><font color="white">Genero</font></label>
          <input
            type="text"
            placeholder="Genero"
            v-model="products.products_data.genero"
          />
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label><font color="white">Precio</font></label>
          <input
            type="text"
            placeholder="Precio"
            v-model="products.products_data.precio"
          />
        </div>
        <div class="field">
          <label><font color="white">Unidades disponibles</font></label>
          <input
            type="text"
            placeholder="Unidades disponibles"
            v-model="products.products_data.unidadesdisponibles"
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
  name: "CreateProduct",

  data: function() {
    return {
      products: {
        user_id: 0,
        products_data: {
          codigoproducto: "",
          categoriaproducto: "",
          descripcion: "",
          genero: "",
          precio: 0,
          unidadesdisponibles: 0,
        },
      },
    };
  },

  methods: {
    processProducts: async function() {
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

      this.products.user_id = userId;
      console.log(this.products);
      console.log(token);
      axios
        .post("http://127.0.0.1:8000/products/create/", this.products, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          console.log("Then");
          this.$emit("completedProducts");
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
  created: async function() {},
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
  margin-top: -140px;
  margin-left: 330px;
  margin-bottom: 8%;
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

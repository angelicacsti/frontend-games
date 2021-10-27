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

    <div class="second menu">
      <div class="ui compact menu">
        <a class="item" @click="$router.push('/products/create')">
          <i class="folder open outline icon"></i>
          Agregar
        </a>
        <a class="item" @click="$router.push('/products/update')">
          <i class="edit outline icon"></i>
          Modificar
        </a>
        <a class="active blue item" @click="$router.push('/products/delete')">
          <i class="trash alternate outline icon"></i>
          Eliminar
        </a>
      </div>
    </div>

    <table class="ui teal table">
      <thead>
        <tr>
          <th></th>
          <th>#</th>
          <th>Código</th>
          <th>Tipo</th>
          <th>Descripción</th>
          <th>Genero</th>
          <th>Precio</th>
          <th>Unidades disponibles</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="collapsing">
            <div class="ui radio checkbox">
              <input type="radio" checked="checked" /> <label></label>
            </div>
          </td>
          <td>1</td>
          <td>00101</td>
          <td>Videojuego</td>
          <td>FIFA 21</td>
          <td>Fútbol</td>
          <td>$192.500</td>
          <td>3000</td>
        </tr>
        <tr>
          <td class="collapsing">
            <div class="ui radio checkbox">
              <input type="radio" /> <label></label>
            </div>
          </td>
          <td>2</td>
          <td>00201</td>
          <td>Consola</td>
          <td>PS5</td>
          <td>consolas</td>
          <td>$3.699.000</td>
          <td>2000</td>
        </tr>
      </tbody>
    </table>

    <footer class="footer">
      <p>&copy; 2021 Todos los derechos reservados. Grupo 5, P25.</p>
    </footer>
  </body>
</template>

<script>
export default {
  name: "DeleteProduct",
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
.ui.teal.table {
  max-width: 900px;
  text-align: left;
  border-radius: 6px;
  margin: 70px;
  margin-top: 20px;
  margin-left: 330px;
  margin-bottom: 16.5%;
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

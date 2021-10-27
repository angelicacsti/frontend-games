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
        <a class="active item" @click="$router.push('/ventas')">
          Ventas
        </a>
        <a class="item" @click="$router.push('/clients')">
          Clientes
        </a>
      </div>
    </div>

    <table class="ui green table">
      <thead>
        <tr>
          <th>#</th>
          <th>ID Venta</th>
          <th>Fecha de venta</th>
          <th>ID producto</th>
          <th>Cantidad</th>
          <th>Costo</th>
          <th>ID cliente</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>F01</td>
          <td>05/06/2021</td>
          <td>00101</td>
          <td>3</td>
          <td>$577.500</td>
          <td>1020567512</td>
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
  name: "Ventas",
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
  margin-top: 100px;
  margin-left: 70px;
  margin-bottom: 20%;
}

.ui.green.table {
  max-width: 900px;
  text-align: left;
  border-radius: 6px;
  margin: 70px;
  margin-top: -390px;
  margin-bottom: -1600;
  margin-left: 330px;
  margin-bottom: 25%;
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

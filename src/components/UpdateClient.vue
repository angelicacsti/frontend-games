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
        <a class="item" @click="$router.push('/clients/create')">
          <i class="folder open outline icon"></i>
          Agregar
        </a>
        <a class="active blue item" @click="$router.push('/clients/update')">
          <i class="edit outline icon"></i>
          Modificar
        </a>
        <a class="item" @click="$router.push('/clients/delete')">
          <i class="trash alternate outline icon"></i>
          Eliminar
        </a>
      </div>
    </div> -->

    <form class="ui form">
      <h4 class="ui dividing header">
        Modificar datos del cliente:
      </h4>
      <div class="two fields">
        <div class="field">
          <label><font color="white">Tipo de documento</font></label>
          <select class="ui fluid dropdown">
            <option value=""></option>
            <option value="CC">C.C. Cédula de ciudadanía</option>
            <option value="CE">C.E. Cédula de extranjería</option>
          </select>
        </div>
        <div class="field">
          <label><font color="white">Número de documento</font></label>
          <input type="text" placeholder="Número de documento" />
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label><font color="white">Nombre completo</font></label>
          <input type="text" placeholder="Nombre completo" />
        </div>
        <div class="field">
          <label><font color="white">Dirección</font></label>
          <input type="text" placeholder="Dirección" />
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label><font color="white">Municipio</font></label>
          <input type="text" placeholder="Municipio" />
        </div>
        <div class="field">
          <label><font color="white">Departamento</font></label>
          <input type="text" placeholder="Departamento" />
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label><font color="white">Correo de contacto</font></label>
          <input type="text" placeholder="Correo electrónico" />
        </div>
        <div class="field">
          <label><font color="white">Teléfono de contacto</font></label>
          <input type="text" placeholder="Teléfono de contacto" />
        </div>
      </div>
      <button class="ui right floated button">
        <i class="edit outline icon"></i> Modificar
      </button>
    </form>

    <footer class="footer">
      <p>&copy; 2021 Todos los derechos reservados. Grupo 5, P25.</p>
    </footer>
  </body>
</template>

<script>
export default {
  name: "UpdateProduct",
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

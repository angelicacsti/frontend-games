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

  <div class="ui inverted segment">
    <router-link to="/home/create"> <h4>Información de la compañía</h4> </router-link>
    <div class="ui divider"></div>
    <form class="ui inverted form">
      <h4 class="ui horizontal divider header"></h4>
      <div class="three fields">
        <div class="field">
          <label>NIT</label>
          <input placeholder="600089821" readonly="" type="text" />
        </div>
        <div class="field">
          <label>Nombre Comercial</label>
          <input placeholder="Games" readonly="" type="text" />
        </div>
        <div class="field">
          <label>Razón Social</label>
          <input placeholder="Games Solutions S.A.S." readonly="" type="text" />
        </div>
      </div>
      <div class="three fields">
        <div class="field">
          <label>Dirección</label>
          <input placeholder="Calle 200 #45-34" readonly="" type="text" />
        </div>
        <div class="field">
          <label>Municipio</label>
          <input placeholder="Bogotá D.C." readonly="" type="text" />
        </div>
        <div class="field">
          <label>Departamento</label>
          <input placeholder="Bogotá" readonly="" type="text" />
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label>Correo de contacto</label>
          <input placeholder="Contacto@games.com" readonly="" type="text" />
        </div>
        <div class="field">
          <label>Teléfono de contacto</label>
          <input placeholder="312 345 6789" readonly="" type="text" />
        </div>
      </div>

      <button
        class="ui button fluid grey"
        @click="$router.push('/home/update')"
      >
        Modificar
      </button>
    </form>
  </div>

  <footer class="footer">
    <p>&copy; 2021 Todos los derechos reservados. Grupo 5, P25.</p>
  </footer>
</template>

<script>
export default {
  name: "Home",

  data: function() {
    return {};
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

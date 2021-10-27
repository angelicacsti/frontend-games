<template>
  <button class="ui inverted pink button" v-if="is_auth" v-on:click="loadHome">
    Inicio
  </button>
  <button
    class="ui inverted teal button"
    v-if="is_auth"
    v-on:click="loadProducts"
  >
    Gestión de inventario
  </button>
  <button
    class="ui inverted orange button"
    v-if="is_auth"
    v-on:click="loadFacturacion"
  >
    Facturación
  </button>
  <button class="ui inverted red button" v-if="is_auth" v-on:click="logOut">
    Cerrar Sesión | <i class="sign out alternate icon"></i>
  </button>

  <div class="main-component">
    <router-view
      v-on:completedLogin="completedLogin"
      v-on:completedRegister="completedRegister"
      v-on:logOut="logOut"
    >
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      is_auth: false,
    };
  },
  components: {},
  methods: {
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false) this.$router.push({ name: "Login" });
      else this.$router.push({ name: "Home" });
    },
    loadLogin: function() {
      this.$router.push({ name: "Login" });
    },
    loadRegister: function() {
      this.$router.push({ name: "Register" });
    },
    completedLogin: function(data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedRegister: function(data) {
      alert("Registro Exitoso");
      this.completedLogin(data);
    },
    logOut: function() {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
    loadHome: function() {
      this.$router.push({ name: "Home" });
    },
    loadUpdateHome: function() {
      this.$router.push({ name: "UpdateHome" });
    },
    loadProducts: function() {
      this.$router.push({ name: "Products" });
    },
    loadCreateProduct: function() {
      this.$router.push({ name: "CreateProduct" });
    },
    loadUpdateProduct: function() {
      this.$router.push({ name: "UpdateProduct" });
    },
    loadDeleteProduct: function() {
      this.$router.push({ name: "DeleteProduct" });
    },
    loadVentas: function() {
      this.$router.push({ name: "Ventas" });
    },
    loadClients: function() {
      this.$router.push({ name: "Clients" });
    },
    loadCreateClient: function() {
      this.$router.push({ name: "CreateClient" });
    },
    loadUpdateClient: function() {
      this.$router.push({ name: "UpdateClient" });
    },
    loadDeleteClient: function() {
      this.$router.push({ name: "DeleteClient" });
    },
    loadFacturacion: function() {
      this.$router.push({ name: "Facturacion" });
    },
    loadAccount: function() {
      this.$router.push({ name: "Account" });
    },
  },
  created: function() {
    this.verifyAuth();
  },
};
</script>

<style lang="scss" scoped>
.ui.inverted.pink.button {
  margin-bottom: 45px;
  margin-left: 500px;
  bottom: 490px;
  position: absolute;
}
.ui.inverted.teal.button {
  margin-bottom: 45px;
  margin-left: 580px;
  bottom: 490px;
  position: absolute;
}
.ui.inverted.orange.button {
  margin-bottom: 45px;
  margin-left: 760px;
  bottom: 490px;
  position: absolute;
}
.ui.inverted.red.button {
  margin-bottom: 45px;
  margin-left: 1060px;
  bottom: 490px;
  position: absolute;
}
</style>

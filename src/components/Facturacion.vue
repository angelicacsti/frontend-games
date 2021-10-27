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
    <h4>Datos del documento:</h4>
    <div class="ui divider"></div>
    <form class="ui inverted form">
      <h4 class="ui horizontal divider header"></h4>
      <div class="three fields">
        <div class="field">
          <label>Número de factura - ID Venta</label>
          <input placeholder="" type="text" />
        </div>
        <div class="field">
          <label>Fecha de emisión</label>
          <input placeholder="" type="text" />
        </div>
        <div class="field">
          <label>Medio de pago</label>
          <input placeholder="" type="text" />
        </div>
      </div>
    </form>
    <h4>Datos del emisor:</h4>
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
    </form>
    <h4>Datos del receptor:</h4>
    <div class="ui divider"></div>
    <form class="ui inverted form">
      <h4 class="ui horizontal divider header"></h4>
      <div class="three fields">
        <div class="field">
          <label>Número de documento ID</label>
          <input placeholder="" type="text" />
        </div>
        <div class="field">
          <label>Nombre completo</label>
          <input placeholder="" type="text" />
        </div>
        <div class="field">
          <label>Dirección</label>
          <input placeholder="" type="text" />
        </div>
      </div>
      <div class="three fields">
        <div class="field">
          <label>Municipio</label>
          <input placeholder="" type="text" />
        </div>
        <div class="field">
          <label>Departamento</label>
          <input placeholder="" type="text" />
        </div>
        <div class="field">
          <label>Correo de contacto</label>
          <input placeholder="" type="text" />
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label>Correo de contacto</label>
          <input placeholder="" type="text" />
        </div>
        <div class="field">
          <label>Teléfono de contacto</label>
          <input placeholder="" type="text" />
        </div>
      </div>
      <h4>Detalle de productos:</h4>
      <div class="ui divider"></div>
      <table class="ui green table">
        <thead>
          <tr>
            <th>#</th>
            <th>Cód. (ID) producto</th>
            <th>Descripción</th>
            <th>Cant.</th>
            <th>Precio unitario</th>
            <th>IVA</th>
            <th>Monto IVA</th>
            <th>Total por ítem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>16%</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button class="ui button fluid green" @click="$router.push('')">
        Agregar fila
      </button>
      <h4>Datos totales:</h4>
      <div class="ui divider"></div>

      <div class="one left field">
        <div class="field">
          <label>Subtotal precio unitario</label>
          <input placeholder="" readonly="" type="text" />
        </div>
        <div class="ui divider"></div>
        <div class="field">
          <label>Total IVA</label>
          <input placeholder="" readonly="" type="text" />
        </div>
        <div class="ui divider"></div>
        <div class="field">
          <label> Total más impuestos </label>
          <input placeholder="" readonly="" type="text" />
        </div>
        <div class="ui divider"></div>
        <div class="field">
          <label><font color="green">Valor total de la operación</font></label>
          <input placeholder="" readonly="" type="text" />
        </div>
        <div class="ui divider"></div>
      </div>
      <button class="ui button fluid grey" @click="$router.push('')">
        Generar factura
      </button>
    </form>
  </div>

  <footer class="footer">
    <p>&copy; 2021 Todos los derechos reservados. Grupo 5, P25.</p>
  </footer>
</template>

<script>
export default {
  name: "Facturacion",

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
  .one.left.field {
    margin-left: 80%;
    max-width: 200px !important;
    text-align: right;
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

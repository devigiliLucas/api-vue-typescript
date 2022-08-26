<template>
  <div id="Card">
    <div>
      <div id="header">
        <div class="content">Fabricante:</div>
        <div class="content">Ano:</div>
        <div class="content">Motor:</div>
        <div class="content">Distancia:</div>
        <div class="content">Prefixo:</div>
        <div class="content">Modelo:</div>
        <div class="content">Companhia:</div>
        <div class="content">Nº de motores:</div>
        <div class="content">Tipo de avião:</div>
        <div class="content">País:</div>
        <div class="content">Opções:</div>
      </div>
    </div>
    <div id="rows">
      <div class="row" v-for="airplane in airplanes" :key="airplane">
        <template v-if="edit">
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Boeing"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: 1997"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: GE 90"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Internacional"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: PT-MUI"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: 777"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Latam"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: 2"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Comercial"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Brasil"
              required
            />
          </div>
          <div id="btn">
            <button class="edit" >
              Salvar
            </button>
            <button class="delete">
              Excluir
            </button>
          </div>
        </template>
        <template v-else>
          <div class="content">{{ airplane }}</div>
          <div class="content">{{ airplane }}</div>
          <div class="content">{{ airplane }}</div>
          <div class="content">{{ airplane }}</div>
          <div class="content">{{ airplane }}</div>
          <div class="content">{{ airplane }}</div>
          <div class="content">{{ airplane }}</div>
          <div class="content">{{ airplane }}</div>
          <div class="content">{{ airplane }}</div>
          <div class="content">{{ airplane }}</div>
          <div id="btn">
            <button class="edit">Editar</button>
            <button class="delete)">
              Excluir
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import planeConfigs from "@/services/planeConfigs";
import { IPlane, IUpdatePlane } from "@/types";

export default class RegisterViews extends Vue {
  airplanes = [];
  airplane_id = null;
  edit = false;

  plane: IPlane = {
    manufacturer: "",
    year: 0,
    engine: "",
    range: "",
    prefix: "",
    model: "",
    company: "",
    engineNumber: 0,
    airplaneType: "",
    country: "",
  };
}
</script>

<style scoped>
#Card {
  width: 85vw;
}

#header,
#row,
.row {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 100px;
  font-size: 20px;
}

#header {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

.row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#header div,
.row div {
  width: 19%;
}

#btn {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.edit,
.delete {
  height: 40%;
  width: 100%;
}

.delete {
  color: white;
  background-color: black;
}

.edit {
  background-color: transparent;
}

.content {
  display: flex;
  justify-content: center;
}

.inpt {
  width: 130px;
}
</style>
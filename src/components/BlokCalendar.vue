<template>
  <div class="col-md-2 card-event-content">
    <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox>
    <div class="card body-calendar-detalle" style="width: 18rem;">
      <div class="card-block">
        <img :src="blok.imagenUT.filename" @click="index = 0" class="card-img-top" alt />
        <div class="card-body">
          <h5 class="card-title">
            <strong>{{blok.Title}}</strong>
          </h5>
          <p class="card-text">{{blok.DescriptionUT}}</p>
          <ul class="card-event-info">
            <li>
              <i class="far fa-calendar-alt" style="font-size:18px"></i>
              {{dia}} {{mes}}
            </li>
            <li>
              <i class="far fa-clock" style="font-size:18px"></i>
              {{hora}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  name: "BlokCalendar",
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  components: {
    CoolLightBox
  },
  data() {
    return {
      dia: "",
      mes: "",
      hora: "",
      title: "",
      meses: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
       items: [],
      index: null
    };
  },
  mounted() {
    this.dia = this.getDia();
    this.hora = this.getHora();
    this.mes = this.getMes();
    this.items.push(this.blok.imagenUT.filename)
  },
  methods: {
    getHora() {
      let date = new Date(this.blok.DatetimeUT);
      return date.getHours() + ":" + date.getMinutes();
    },
    getMes() {
      let date = new Date(this.blok.DatetimeUT);
      return this.meses[date.getMonth()];
    },
    getDia() {
      let date = new Date(this.blok.DatetimeUT);
      return date.getDay();
    }
  }
};
</script> 

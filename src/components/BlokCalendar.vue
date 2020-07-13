<template>
  <div class="col-md-2 card-event-content">
    <div class="card body-calendar-detalle" style="width: 18rem;">
      <div class="card-block">
        <img :src="blok.imagenUT.filename" class="card-img-top" alt />
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
export default {
  name: "BlokCalendar",
  props: {
    blok: {
      type: Object,
      required: true
    }
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
      ]
    };
  },
  mounted() {
    this.dia = this.getDia();
    this.hora = this.getHora();
    this.mes = this.getMes();
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

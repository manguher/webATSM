<template>
  <div class="content body-calendar">
    <div class="container-fluid">
      <div class="row justify-content-md-center logo">
        <img
          src="../assets/logo.png"
          class="img-fluid logo-asamblea"
          alt="Responsive image"
          width="150"
          height="150"
        />
      </div>
      <div class="row justify-content-md-center">
        <h1 class="title-calendar">
          <strong>Calendario de Actividades Semanal Asamblea Territorial San Miguel</strong>
        </h1>
      </div>
      <div class="row justify-content-md-center">
        <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox>
        <div class="col-md-4">
          <table class="table table-event">
            <thead>
              <tr>
                <th scope="col">Evento</th>
                <th scope="col">Unidad Territorial</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, indexblok) in story.content.body" :key="item.id">
                <th scope="row" class="table-event-title">
                  <i class="far fa-find" style="font-size:18px"></i>
                  <a @click="index = indexblok">{{item.Title}}</a>
                </th>
                <td>{{item.numeroUT}}</td>
                <td>{{getFecha(item.DatetimeUT)}}</td>
                <td>{{getHora(item.DatetimeUT)}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <template v-for="(item) in story.content.body">
          <component
            :is="require(`@/components/${item.component}.vue`).default"
            :blok="item"
            :key="item._uid"
          ></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import storyapi from "@/utils/api.js";
import moment from "moment";
export default {
  name: "Calendar",
  created() {
    if (window.storyblok) {
      window.storyblok.init({
        accessToken: process.env.VUE_APP_TOKEN
      });
      window.storyblok.on("change", () => {
        this.getStory("calendar", "draft");
      });
      window.storyblok.pingEditor(() => {
        if (window.storyblok.isInEditor()) {
          this.getStory("calendar", "draft");
        } else {
          this.getStory("calendar", "published");
        }
      });
    } else {
      this.getStory("calendar", "published");
    }
  },
  data() {
    return {
      story: {
        content: {
          body: []
        }
      },
      items: [],
      index: null
    };
  },
  methods: {
    async getStory(slug, version) {
      const { data } = await storyapi.get("cdn/stories/" + slug, {
        version: version
      });
      console.log(data.story);
      this.story = data.story;
      this.setArrayImage(this.story)
    },
    getHora(date) {
      if (date !== "") {
        return moment(date).format("HH:mm");
      } else return "-";
    },
    getFecha(date) {
      if (date !== "") {
        return moment(date).format("DD/MM/YYYY");
      } else return "-";
    },
    setArrayImage(storyItem) {
      this.items = storyItem.content.body.map(item => {
          return item.imagenUT.filename
      })
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

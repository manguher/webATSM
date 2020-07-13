<template>
  <div class="content body-calendar">
    <div class="container">
      <div class="row justify-content-md-center" >
        <h1 class="title-calendar">Calendatio Asamble Territorial San Miguel</h1>
      </div>
      <div class="row">
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
      }
    };
  },
  methods: {
    async getStory(slug, version) {
      const { data } = await storyapi.get("cdn/stories/" + slug, {
        version: version
      });
      console.log(data.story);
      this.story = data.story;
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

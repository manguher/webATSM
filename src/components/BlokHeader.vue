<template>
  <header class="header">
    <a href="#default" class="logo">CompanyLogo</a>
    <div class="header-right">
      <a class="active" href="#home">Home</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  </header>
</template>
<script>
export default {
  name: "BlokHeader",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

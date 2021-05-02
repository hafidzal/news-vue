<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ title }}
    <detail></detail>
  </div>
</template>

<script>
import detail from '@/components/Detail.vue';

export default {
  name: 'Detail',
  components: {
    detail,
  },
  props: {
    title: String,
  },
};
</script>

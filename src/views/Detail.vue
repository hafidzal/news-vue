<template>
    <detail></detail>
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

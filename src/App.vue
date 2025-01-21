<script setup>
  import Aside from '@/components/Aside.vue';
  import Main from '@/components/Main.vue';
</script>

<template>
  <div class="max-w-screen-xl p-3 md:p-6 mx-auto">
    <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
      <Aside class="lg:col-span-3" />
      <Main class="lg:col-span-9" />
    </div>
  </div>
</template>
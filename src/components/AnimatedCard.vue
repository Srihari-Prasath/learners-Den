<!-- src/components/AnimatedCard.vue -->
<template>
  <div class="card" @click="navigateToYear">
    <h2>{{ year }} Year</h2>
  </div>
</template>

<script>
export default {
  props: ['year'],
  methods: {
    navigateToYear() {
      this.$router.push({ name: 'YearPage', params: { year: this.year } });
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  padding: 20px;
  margin: 20px;
  border: 2px solid #4CAF50;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.1);
}
</style>

<template>
  <div class="year-page">
    <h1 class="title">{{ subjectTitle }}</h1>

    <div class="units">
      <transition-group name="fade" tag="div" class="cards-container">
        <div v-for="unit in units" :key="unit.title" class="card">
          <h3>{{ unit.title }}</h3>
          <button @click="download(unit.pdf)">Download PDF</button>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YearPage',
  data() {
    return {
      year: this.$route.params.year,
      subjectTitle: 'Problem Solving and Python Programming',
      units: [
        { title: 'Unit 1 - Introduction to PSPP', pdf: 'path/to/pspp_unit1.pdf' },
        { title: 'Unit 2 - Advanced PSPP Concepts', pdf: 'path/to/pspp_unit2.pdf' },
        { title: 'Unit 3 - PSPP in Practice', pdf: 'path/to/pspp_unit3.pdf' },
        { title: 'Unit 4 - PSPP in Practice', pdf: 'path/to/pspp_unit4.pdf' },
        { title: 'Unit 5 - PSPP in Practice', pdf: 'path/to/pspp_unit5.pdf' },
      ]
    };
  },
  methods: {
    download(filePath) {
      const link = document.createElement('a');
      link.href = filePath;
      link.download = '';
      link.click();
    }
  }
};
</script>

<style scoped>
.year-page {
  text-align: center;
  color: #ffffff;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f0f0f0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.card {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  width: calc(33% - 2rem); /* Limit to 3 cards per row */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.6s ease forwards;
  opacity: 0;
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.card button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.card button:hover {
  background-color: #0056b3;
}

/* Fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter, .card {
  opacity: 0;
}

.fade-enter-to, .card {
  opacity: 1;
}

/* Keyframe for card fade-in effect */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

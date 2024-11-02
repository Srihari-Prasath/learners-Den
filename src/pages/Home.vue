<template>
  <div class="home">
    <div class="intro">
      <h1>Welcome to Learners Den!</h1>
      <p>{{ randomQuote }}</p>
    </div>

    <div class="year-cards">
      <div
        v-for="year in years"
        :key="year"
        class="year-card"
        @click="navigateToYear(year)"
      >
        <h2>{{ year }} Year</h2>
        <p>Click to explore study materials.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      quotes: [
        "Education is the most powerful weapon which you can use to change the world.",
        "The roots of education are bitter, but the fruit is sweet.",
        "An investment in knowledge pays the best interest.",
        "What we learn with pleasure we never forget.",
        "The beautiful thing about learning is that no one can take it away from you."
      ],
      years: [1, 2, 3, 4],
      randomQuote: ''
    };
  },
  created() {
    this.setRandomQuote();
  },
  methods: {
    setRandomQuote() {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.randomQuote = this.quotes[randomIndex];
    },
    navigateToYear(year) {
      // Ensure the route name corresponds to what you've set in router.js
      this.$router.push({ path: `/year/${year}` }); // Change this if you have named routes
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.intro {
  margin-bottom: 40px;
}

.year-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* Allows wrapping for smaller screens */
}

.year-card {
  background: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s; /* Smooth animations */
}

.year-card:hover {
  transform: scale(1.05); /* Slightly enlarge on hover */
  background: rgba(255, 255, 255, 0.4);
}

.year-card h2 {
  margin: 0;
}

.year-card p {
  margin-top: 10px;
}
</style>

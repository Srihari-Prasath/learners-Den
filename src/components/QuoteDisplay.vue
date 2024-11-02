<!-- src/components/QuoteDisplay.vue -->
<template>
    <div class="quote">
      <p>{{ currentQuote }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quotes: [
          "Education is the most powerful weapon which you can use to change the world.",
          "The roots of education are bitter, but the fruit is sweet.",
          "In learning, you will teach, and in teaching, you will learn.",
          "An investment in knowledge pays the best interest.",
          "Tell me and I forget. Teach me and I remember. Involve me and I learn."
        ],
        currentQuote: "",
      };
    },
    mounted() {
      this.randomQuote();
    },
    methods: {
      randomQuote() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        this.currentQuote = this.quotes[randomIndex];
      },
    },
  };
  </script>
  
  <style scoped>
  .quote {
    font-size: 1.5em;
    text-align: center;
    margin: 20px 0;
  }
  </style>
  
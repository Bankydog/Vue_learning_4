<template>
  <v-card>
    <v-card-title>ให้คะแนนรีวิว</v-card-title>
    <v-card-text>
      <v-textarea v-model="reviewText" label="เขียนรีวิวของคุณ"></v-textarea>
      <v-rating v-model="rating" label="คะแนน" hover></v-rating>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="submitReview">ส่งรีวิว</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      reviewText: "",
      rating: 0,
    };
  },
  methods: {
    submitReview() {
      // i can push a data to server here
      console.log("รีวิว:", this.reviewText);
      console.log("คะแนน:", this.rating);
      alert("ส่งรีวิวสำเร็จ!");
    },
  },
};
</script>
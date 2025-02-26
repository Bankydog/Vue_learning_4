<script setup lang="ts">
import { ref } from "vue";
import Swal from "sweetalert2";

// use ref to create reactive variables
const name = ref("");
const hobby = ref("");
const career = ref("");
const address = ref("");

// function to show profile
const showProfile = () => {
  Swal.fire({
    title: "Profile",
    html: `
      <p><strong>Name:</strong> ${name.value}</p>
      <p><strong>Hobby:</strong> ${hobby.value}</p>
      <p><strong>Career:</strong> ${career.value}</p>
      <p><strong>Address:</strong> ${address.value}</p>
    `,
    icon: "success",
    confirmButtonText: "Close",
  });
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
      <h2 class="text-2xl font-semibold text-center text-gray-800">Profile</h2>

      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          v-model="name"
          type="text"
          id="name"
          class="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      <div class="mb-4">
        <label for="hobby" class="block text-sm font-medium text-gray-700"
          >Hobby</label
        >
        <input
          v-model="hobby"
          type="text"
          id="hobby"
          class="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      <div class="mb-4">
        <label for="career" class="block text-sm font-medium text-gray-700"
          >Career</label
        >
        <input
          v-model="career"
          type="text"
          id="career"
          class="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      <div class="mb-6">
        <label for="address" class="block text-sm font-medium text-gray-700"
          >Address</label
        >
        <textarea
          v-model="address"
          id="address"
          class="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        ></textarea>
      </div>

      <button
        @click="showProfile"
        class="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </div>
  </div>
</template>
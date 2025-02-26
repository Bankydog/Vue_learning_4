<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const { handleSubmit, errors } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  }),
});

const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <form
      @submit="onSubmit"
      class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
    >
      <h2 class="text-2xl font-semibold text-center text-gray-800">Login</h2>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          class="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <span v-if="emailError" class="text-red-500 text-sm mt-1">{{
          emailError
        }}</span>
      </div>

      <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          class="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <span v-if="passwordError" class="text-red-500 text-sm mt-1">{{
          passwordError
        }}</span>
      </div>

      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  </div>
</template>

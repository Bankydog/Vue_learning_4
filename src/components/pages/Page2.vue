<script setup lang="ts">
import { useToast } from "vue-toastification";

const toast = useToast();

const showSuccessToast = () => {
  toast.success("การดำเนินการสำเร็จ!");
};

const showErrorToast = () => {
  toast.error("เกิดข้อผิดพลาด!");
};

const showInfoToast = () => {
  toast.info("ข้อมูลเพิ่มเติม...");
};

const showWarningToast = () => {
  toast.warning("คำเตือน!");
};
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col justify-center items-center bg-gray-100"
  >
    <h1 class="text-4xl font-semibold text-sky-500 mb-8">ทดสอบ Toast</h1>
    <div class="flex gap-4">
      <button
        @click="showSuccessToast"
        class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200"
      >
        Success
      </button>
      <button
        @click="showErrorToast"
        class="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Error
      </button>
      <button
        @click="showInfoToast"
        class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Info
      </button>
      <button
        @click="showWarningToast"
        class="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-200"
      >
        Warning
      </button>
    </div>
  </div>
</template>


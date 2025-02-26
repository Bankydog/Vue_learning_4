<script setup lang="ts">
import { NCard, NSpace, NIcon, NLi } from "naive-ui";
import {
  MailOutlined,
  GithubOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@vicons/antd";

const email = "your.email@example.com";
const github = "https://github.com/your-username";
const instagram = "https://instagram.com/your-username";
const facebook = "https://facebook.com/your-username";
</script>

<template>
  <n-card
    title="About Us"
    class="w-screen h-screen flex justify-center items-center"
  >
    <n-space vertical>
      <n-space>
        <n-icon :size="24">
          <MailOutlined />
        </n-icon>
        <n-li :href="`mailto:${email}`" :underline="false">{{ email }}</n-li>
      </n-space>

      <n-space>
        <n-icon :size="24">
          <GithubOutlined />
        </n-icon>
        <n-li :href="github" :underline="false">GitHub</n-li>
      </n-space>

      <n-space>
        <n-icon :size="24">
          <InstagramOutlined />
        </n-icon>
        <n-li :href="instagram" :underline="false">Instagram</n-li>
      </n-space>

      <n-space>
        <n-icon :size="24">
          <FacebookOutlined />
        </n-icon>
        <n-li :href="facebook" :underline="false">Facebook</n-li>
      </n-space>
    </n-space>
  </n-card>
</template>
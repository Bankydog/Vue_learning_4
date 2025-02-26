<template>
  <v-app>
    <v-main class="landing-page">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="text-h2 font-weight-bold mb-4">Welcome to Chat App</h1>
            <p class="text-body-1 mb-8">
              Connect with friends and family anytime, anywhere.
            </p>
            <v-btn color="primary" large @click="goToChat"
              >Start Chatting</v-btn
            >
          </v-col>
        </v-row>
        <v-row class="mt-12" justify="center">
          <v-col cols="12" md="10">
            <v-row>
              <v-col cols="12" md="4">
                <v-card class="feature-card">
                  <v-card-title>Simple and User-Friendly</v-card-title>
                  <v-card-text>
                    Intuitive interface lets you start chatting instantly.
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card class="feature-card">
                  <v-card-title>Group and Private Chats</v-card-title>
                  <v-card-text>
                    Create group chats or have private conversations with your
                    friends.
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card class="feature-card">
                  <v-card-title>Secure and Private</v-card-title>
                  <v-card-text>
                    Your conversations are encrypted and secure.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    goToChat() {
      // You can add logic to navigate to the chat page here
      alert("Navigating to chat page...");
    },
  },
};
</script>

<style scoped>
.landing-page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 100vh;
  display: flex;
  align-items: center;
}

.feature-card {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
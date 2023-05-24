<script setup>

import { io } from "socket.io-client";
import { onBeforeMount, ref } from 'vue';

const name = ref('tsuki')

const messages = ref([]);

const newMessage = ref('');

const joined = ref(false)

const typingDisplay = ref ('') 

const socket = io("http://localhost:3000")

onBeforeMount(() => {
  socket.emit('findAllMessages', {}, (response) => {
    messages.value = response;
  } )

  socket.on("message", (message) => {
    messages.value.push(message);
  });

  socket.on("isTyping", ({name, isTyping}) => {
    if (isTyping)
      typingDisplay.value = `${name} is typing...`;
    else
      typingDisplay.value = '';
  })
});

const sendMessage = () => {
  socket.emit('createMessage', { text: newMessage.value }, () => {
    newMessage.value = ''; 
  });
}; 

const join = () => {
  socket.emit("joinRoom", { name: name.value}, () => {
    joined.value = true;
  });
};

let timeout;

const isTyping = () => {
  socket.emit("isTyping", { isTyping: true });
  timeout = setTimeout(() => {
    socket.emit("isTyping", { isTyping: false });
  }, 2000);
};

</script>

<template>
  <div class="chat">
    <div v-if="!joined">
       <form @submit.prevent="join">
        <label>name?</label>
        <input v-model="name" />
        <button type="submit">Send</button>
      </form>
    </div>
    <div class="chat-container">
      <div class="messages-container">
        <div v-if="joined">
          <div v-for="message in messages">
           <h1>
             [{{ message.name }}]: {{ message.text }}
           </h1>
          </div>
        </div>
      </div>

      <div v-if="typingDisplay">{{ typingDisplay }}</div>

      <hr />

      <div class="message-input">
        <form @submit.prevent="sendMessage">
          <label>Message:</label>
          <input v-model="newMessage" @input="isTyping" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
  @import './assets/base.css';
  .chat {
    padding: 20px;
    height: 100vh;
  }
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .messages-container {
    flex: 1;
  }

</style>

<script setup>
import { supabase } from '../supabase/init';
import { useRouter } from 'vue-router';
import store from '../store/index';
import { computed } from 'vue';

 // Setup ref to router
 const router = useRouter()


 const user = computed(() => store.state.user)

const logOut = async () => {
    await supabase.auth.signOut()
    router.push({name: "Home"})
}

</script>

<template>
  <header class="bg-at-light-green text-white">
    <nav class="container py-5 px-4 flex flex-col sm:flex-row gap-4 items-center">
      <div class="flex items-center gap-x-4">
        <img  class="w-14" src="../assets/images/dumbbell-light.png"/>
        <h1 class="text-lg">Ben's Workout Tracker</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-10">
        <router-link class="cursor-pointer" :to="{ name: 'Home' }">Home</router-link>
        <router-link  v-if="user" class="cursor-pointer" :to="{ name: 'Create' }">Create</router-link>
        <router-link  v-if="!user" class="cursor-pointer" :to="{ name: 'Login' }">Login</router-link>
        <li @click="logOut" v-if="user" class="cursor-pointer">Logout</li>
      </ul>
    </nav>
  </header>
</template>

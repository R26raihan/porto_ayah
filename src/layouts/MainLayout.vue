<template>
  <div class="min-h-screen bg-surface-bright text-on-background selection:bg-secondary-container">
    <Header />
    <Sidebar />
    
    <!-- Mobile Sidebar Overlay -->
    <div 
      v-if="isSidebarOpen" 
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 lg:hidden"
    ></div>

    <main 
      :class="['pt-24 min-h-[calc(100vh-80px)] transition-all duration-300', isSidebarOpen ? 'lg:ml-64' : 'ml-0']"
      @click="isSidebarOpen = (windowWidth < 1024 ? false : isSidebarOpen)"
    >
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/common/Header.vue'
import Sidebar from '../components/common/Sidebar.vue'
import Footer from '../components/common/Footer.vue'
import { isSidebarOpen } from '../store'

const windowWidth = ref(window.innerWidth)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

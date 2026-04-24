<template>
  <aside 
    :class="[
      'flex flex-col h-screen fixed left-0 top-0 pt-20 w-64 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-40 transition-transform duration-300',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <div class="px-6 py-6 mb-8 border-b border-slate-100">
      <div class="relative w-16 h-16 mb-4">
        <div class="absolute -inset-1 border border-orange-500/20 rounded-full animate-spin-slow"></div>
        <img 
          alt="Andri Sulistiawan Portrait" 
          class="w-full h-full rounded-full border-2 border-white shadow-md object-cover" 
          src="../../assets/image.png"
        />
        <div class="absolute bottom-0 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <h2 class="font-bold text-slate-700 dark:text-white font-mono text-xs uppercase tracking-tight">Andri Sulistiawan</h2>
      <p class="text-slate-400 font-mono text-[9px] uppercase tracking-widest mt-1">MEP DRAFTER AND ENGINEER</p>
    </div>

    <!-- Navigation Section -->
    <nav class="flex flex-col gap-1 flex-1 font-mono text-xs">
      <router-link 
        to="/profile" 
        active-class="border-l-4 border-orange-500 translate-x-1 !text-orange-600 font-bold"
        class="flex items-center px-6 py-3 text-slate-500 hover:border-l-4 hover:border-orange-500 hover:translate-x-1 transition-transform cursor-pointer"
      >
        <span class="material-symbols-outlined mr-3 text-sm">badge</span>
        <span>Identity_Profile</span>
      </router-link>

      <router-link 
        to="/mechanical" 
        active-class="border-l-4 border-orange-500 translate-x-1 !text-orange-600 font-bold"
        class="flex items-center px-6 py-3 text-slate-500 hover:border-l-4 hover:border-orange-500 hover:translate-x-1 transition-transform cursor-pointer"
      >
        <span class="material-symbols-outlined mr-3 text-sm">iron</span>
        <span>Mechanical</span>
      </router-link>
      
      <router-link 
        to="/electrical" 
        active-class="border-l-4 border-orange-500 translate-x-1 !text-orange-600 font-bold"
        class="flex items-center px-6 py-3 text-slate-500 hover:border-l-4 hover:border-orange-500 hover:translate-x-1 transition-transform cursor-pointer"
      >
        <span class="material-symbols-outlined mr-3 text-sm">bolt</span>
        <span>Electrical</span>
      </router-link>

      <router-link 
        to="/plumbing" 
        active-class="border-l-4 border-orange-500 translate-x-1 !text-orange-600 font-bold"
        class="flex items-center px-6 py-3 text-slate-500 hover:border-l-4 hover:border-orange-500 hover:translate-x-1 transition-transform cursor-pointer"
      >
        <span class="material-symbols-outlined mr-3 text-sm">water_drop</span>
        <span>Plumbing</span>
      </router-link>
    </nav>

    <!-- Bottom Actions (Optional, kept from previous for utility) -->
    <div class="px-4 py-4 border-t border-slate-200 dark:border-slate-800">
       <router-link 
        to="/" 
        exact-active-class="!text-orange-600 font-bold"
        class="flex items-center px-2 py-2 text-slate-500 font-mono text-[10px] uppercase hover:text-orange-500 transition-colors"
      >
        <span class="material-symbols-outlined mr-2 text-sm">home</span>
        <span>Dossier Home</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { isSidebarOpen } from '../../store'
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

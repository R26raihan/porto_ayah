<template>
  <aside 
    :class="[
      'flex flex-col h-screen fixed left-0 top-0 pt-20 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-40 transition-transform duration-300 shadow-2xl',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <!-- User Profile Summary (Sticky-ish at top) -->
    <div class="px-8 py-8 border-b border-slate-50">
      <div class="relative w-20 h-20 mb-6">
        <div class="absolute -inset-2 border border-orange-500/10 rounded-full animate-spin-slow"></div>
        <img 
          alt="Andri Sulistiawan Portrait" 
          class="w-full h-full rounded-full border-4 border-white shadow-xl object-cover" 
          src="../../assets/image.png"
        />
        <div class="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-white"></div>
      </div>
      <h2 class="font-bold text-slate-800 dark:text-white font-mono text-sm uppercase tracking-tight">Andri Sulistiawan</h2>
      <p class="text-slate-400 font-mono text-[9px] uppercase tracking-[0.2em] mt-1 font-medium">MEP DRAFTER & ENGINEER</p>
    </div>

    <!-- Main Navigation -->
    <div class="flex-1 overflow-y-auto py-6 px-4">
      <!-- Main Pages Section -->
      <div class="mb-8">
        <p class="px-4 text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em] mb-4">Main_Pages</p>
        <nav class="flex flex-col gap-1 font-mono text-[11px]">
          <router-link 
            v-for="(link, i) in mainLinks" :key="i"
            :to="link.path" 
            @click="closeOnMobile"
            active-class="bg-slate-50 !text-orange-600 font-bold border-l-4 border-orange-500"
            class="flex items-center px-4 py-3.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all rounded-r-lg group"
          >
            <span class="material-symbols-outlined mr-4 text-lg opacity-60 group-hover:opacity-100 transition-opacity">{{ link.icon }}</span>
            <span class="tracking-widest uppercase">{{ link.name }}</span>
          </router-link>
        </nav>
      </div>

      <!-- Technical Disciplines Section -->
      <div>
        <p class="px-4 text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em] mb-4">Drafting_Disciplines</p>
        <nav class="flex flex-col gap-1 font-mono text-[11px]">
          <router-link 
            v-for="(link, j) in disciplineLinks" :key="j"
            :to="link.path" 
            @click="closeOnMobile"
            active-class="bg-orange-50 !text-orange-700 font-bold border-l-4 border-orange-500"
            class="flex items-center px-4 py-3.5 text-slate-500 hover:bg-orange-50/50 hover:text-orange-600 transition-all rounded-r-lg group"
          >
            <span class="material-symbols-outlined mr-4 text-lg opacity-60 group-hover:opacity-100 transition-opacity">{{ link.icon }}</span>
            <span class="tracking-widest uppercase">{{ link.name }}</span>
          </router-link>
        </nav>
      </div>
    </div>

    <!-- Sidebar Footer -->
    <div class="p-6 border-t border-slate-50 bg-slate-50/30">
       <router-link 
        to="/" 
        @click="closeOnMobile"
        exact-active-class="!text-orange-600 font-bold"
        class="flex items-center justify-center p-3 text-slate-400 font-mono text-[9px] uppercase hover:text-slate-900 transition-colors border border-slate-200 rounded-lg"
      >
        <span class="material-symbols-outlined mr-2 text-sm">home</span>
        <span>Return to Dossier</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { isSidebarOpen } from '../../store'

const mainLinks = [
  { name: 'Identity_Profile', path: '/profile', icon: 'badge' },
  { name: 'Technical_Projects', path: '/portfolio', icon: 'folder_open' },
  { name: 'Career_Experience', path: '/experience', icon: 'timeline' },
  { name: 'Skills_&_Contact', path: '/skills-contact', icon: 'contact_page' }
]

const disciplineLinks = [
  { name: 'Mechanical', path: '/mechanical', icon: 'hvac' },
  { name: 'Electrical', path: '/electrical', icon: 'bolt' },
  { name: 'Plumbing', path: '/plumbing', icon: 'water_drop' }
]

const closeOnMobile = () => {
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
}
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 10s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Custom scrollbar for sidebar */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #cbd5e1;
}
</style>

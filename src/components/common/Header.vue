<template>
  <header class="fixed top-0 w-full z-50 border-b border-slate-300 bg-slate-50/95 flex justify-between items-center px-4 md:px-6 py-3 max-w-full">
    <div class="flex items-center gap-2 md:gap-4">
      <button @click="toggleSidebar" class="p-1 hover:bg-slate-200 transition-colors flex items-center justify-center cursor-crosshair">
        <span class="material-symbols-outlined">menu</span>
      </button>
      <router-link to="/" class="text-sm md:text-lg font-black tracking-widest text-slate-900 border-l-4 border-slate-900 pl-2 font-mono uppercase truncate max-w-[150px] md:max-w-none">
        <span class="hidden sm:inline">ANDRI SULISTIAWAN</span>
        <span class="sm:hidden">ANDRI S.</span>
      </router-link>
    </div>
    <nav class="hidden lg:flex items-center space-x-8">
      <router-link 
        to="/profile" 
        class="text-slate-600 font-medium font-mono tracking-tighter uppercase transition-colors duration-150 hover:bg-orange-50 hover:text-orange-600 px-2 py-1"
        active-class="text-orange-600 font-bold border-b border-orange-600"
      >Profile</router-link>
      <router-link 
        to="/portfolio" 
        class="text-slate-600 font-medium font-mono tracking-tighter uppercase transition-colors duration-150 hover:bg-orange-50 hover:text-orange-600 px-2 py-1"
        active-class="text-orange-600 font-bold border-b border-orange-600"
      >Projects</router-link>
      <router-link 
        to="/experience" 
        class="text-slate-600 font-medium font-mono tracking-tighter uppercase transition-colors duration-150 hover:bg-orange-50 hover:text-orange-600 px-2 py-1"
        active-class="text-orange-600 font-bold border-b border-orange-600"
      >Experience</router-link>
      <router-link 
        to="/skills-contact" 
        class="text-slate-600 font-medium font-mono tracking-tighter uppercase transition-colors duration-150 hover:bg-orange-50 hover:text-orange-600 px-2 py-1"
        active-class="text-orange-600 font-bold border-b border-orange-600"
      >Skills</router-link>
      <router-link 
        to="/skills-contact" 
        class="text-slate-600 font-medium font-mono tracking-tighter uppercase transition-colors duration-150 hover:bg-orange-50 hover:text-orange-600 px-2 py-1"
        active-class="text-orange-600 font-bold border-b border-orange-600"
      >Contact</router-link>
    </nav>
    <a 
      href="https://drive.google.com/file/d/1byCT2IVSkKbtNnCiVIFRWCtEVBiH_1WZ/view?usp=sharing" 
      target="_blank"
      class="bg-primary text-on-primary px-3 py-2 md:px-4 font-mono tracking-tighter uppercase border border-primary transition-all hover:bg-transparent hover:text-primary flex items-center gap-2"
    >
      <span class="hidden md:inline">DOWNLOAD_CV</span>
      <span class="md:hidden text-xs">CV</span>
      <span class="material-symbols-outlined text-sm">download</span>
    </a>
  </header>
</template>

<script setup lang="ts">
import { toggleSidebar } from '../../store'
</script>

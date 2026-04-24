<template>
  <div class="blueprint-grid min-h-screen p-4 md:p-8 lg:p-12 max-w-[1400px] mx-auto">
    <!-- Header Section -->
    <header class="mb-12 md:mb-16 border-b border-slate-200 pt-8 md:pt-12 pb-8 md:pb-10">
      <div class="flex items-baseline gap-4 mb-3">
        <span class="font-mono text-slate-300 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em]">TECHNICAL_ARCHIVE_v5.1</span>
        <div class="flex-1 h-px bg-slate-100"></div>
      </div>
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-700 tracking-tighter mb-4 md:mb-6 uppercase leading-none">Portofolio <span class="text-orange-500/60">Proyek</span></h1>
      <p class="text-slate-400 max-w-2xl text-xs md:text-base leading-relaxed font-medium">
        Koleksi dokumentasi proyek MEP strategis. Fokus pada akurasi shop drawing, koordinasi teknis, dan pengawasan instalasi lapangan.
      </p>
    </header>

    <!-- BIGGEST PROJECT HIGHLIGHT -->
    <section v-if="featuredProject" class="mb-20 md:mb-32">
      <div class="flex items-center gap-4 mb-8 md:mb-12">
        <h2 class="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-slate-300 italic">BIGGEST PROJECT</h2>
        <div class="flex-1 h-px bg-slate-100"></div>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
        <!-- Image Showcase -->
        <div class="lg:w-3/5 group">
          <div class="relative aspect-[16/10] overflow-hidden rounded-xl md:rounded-2xl transition-all duration-1000 shadow-xl md:shadow-2xl shadow-slate-200">
            <img 
              :src="activeImage || featuredProject.thumbnail" 
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              alt="Hotel Gaia Highlight"
            />
            
            <!-- Photo Strip Overlay (Real Gallery) -->
            <div 
              v-if="featuredProject.gallery"
              class="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide"
            >
              <div 
                v-for="(img, gIndex) in featuredProject.gallery" 
                :key="gIndex"
                @click="setActiveImage(img)"
                :class="[
                  'shrink-0 w-12 h-12 md:w-16 md:h-16 border rounded overflow-hidden cursor-pointer transition-all',
                  activeImage === img ? 'border-orange-500 ring-4 ring-orange-500/20 scale-105' : 'border-white/30 hover:border-white/60'
                ]"
              >
                <img :src="img" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- Details -->
        <div class="lg:w-2/5 space-y-6 md:space-y-8">
          <div class="space-y-3 md:space-y-4">
            <div class="flex items-center gap-3">
              <div class="h-px w-6 md:w-8 bg-orange-500"></div>
              <p class="text-orange-500 font-mono text-[9px] md:text-xs uppercase tracking-widest font-bold">{{ featuredProject.company }}</p>
            </div>
            <h3 class="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase text-slate-700 leading-[0.9]">{{ featuredProject.project }}</h3>
          </div>
          
          <p class="text-slate-500 text-xs md:text-base leading-relaxed font-medium italic border-l-4 border-slate-100 pl-6 md:pl-8">
            "Pekerjaan MEP skala masif mencakup Hotel Bintang 5 dengan sistem terintegrasi yang kompleks."
          </p>

          <div class="grid grid-cols-1 gap-4 md:gap-6 pt-2">
            <div v-for="(task, tIndex) in featuredProject.tasks.slice(0, 3)" :key="tIndex" class="flex gap-4">
              <span class="text-slate-200 font-mono text-lg md:text-xl leading-none">0{{ tIndex + 1 }}</span>
              <p class="text-slate-500 text-xs md:text-base leading-snug">{{ task }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OTHER PROJECTS -->
    <div class="space-y-8 md:space-y-12">
      <div v-if="featuredProject" class="flex items-center gap-4">
        <h2 class="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-slate-300">Other_Technical_Works</h2>
        <div class="flex-1 h-px bg-slate-100"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="(item, index) in otherProjects" 
          :key="index"
          class="group bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden flex flex-col rounded-xl"
        >
          <!-- Project Visual -->
          <div class="aspect-video bg-slate-50 border-b border-slate-100 relative overflow-hidden">
            <img 
              v-if="item.thumbnail" 
              :src="item.thumbnail" 
              class="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              alt="Project visual"
            />
            
            <div class="absolute top-3 left-3 flex gap-2 z-10">
              <span class="bg-slate-700/80 text-white font-mono text-[7px] md:text-[8px] px-2 py-0.5 uppercase tracking-tighter">MEP</span>
              <span class="bg-orange-500/10 text-orange-600 font-mono text-[7px] md:text-[8px] px-2 py-0.5 uppercase tracking-tighter font-bold border border-orange-500/10">{{ item.period }}</span>
            </div>
          </div>

          <div class="p-6 md:p-8 flex-1 flex flex-col">
            <div class="flex justify-between items-start mb-3 md:mb-4">
              <span class="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">{{ item.company }}</span>
            </div>
            
            <h3 class="text-base md:text-lg font-bold text-slate-600 mb-2 md:mb-3 group-hover:text-slate-800 transition-colors uppercase leading-tight tracking-tight">{{ item.project }}</h3>
            
            <p class="text-slate-400 text-[10px] md:text-sm mb-4 md:mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed">
              {{ item.tasks[0] }}
            </p>

            <div class="mt-auto flex flex-wrap gap-2">
              <span class="px-2 py-0.5 bg-slate-50 border border-slate-100 text-[7px] md:text-[8px] font-bold text-slate-400 uppercase">Shop_Drawing</span>
              <span class="px-2 py-0.5 bg-slate-50 border border-slate-100 text-[7px] md:text-[8px] font-bold text-slate-400 uppercase">2D_Drafting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { careerData } from '../data/career'

const featuredProject = computed(() => {
  return careerData.find(p => p.project.includes('HOTEL GAIA'))
})

const activeImage = ref(featuredProject.value?.thumbnail)

const otherProjects = computed(() => {
  return careerData.filter(p => !p.project.includes('HOTEL GAIA'))
})

const setActiveImage = (img: string) => {
  activeImage.value = img
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

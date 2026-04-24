<template>
  <div class="blueprint-grid min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
    <!-- Hero Section -->
    <section class="mb-12 md:mb-20 border-l-4 border-orange-500 pl-6 md:pl-8 pt-8 md:pt-12">
      <div class="flex items-center space-x-3 text-orange-600 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4">
        <span class="w-2.5 h-2.5 md:w-3 md:h-3 bg-orange-600"></span>
        <span class="font-bold">Technical_Focus // MECHANICAL_HVAC</span>
      </div>
      <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-700 mb-6 leading-tight uppercase tracking-tighter">Mechanical & <br/><span class="text-slate-400">HVAC Drafting</span></h1>
      <p class="text-slate-500 max-w-2xl text-sm md:text-lg leading-relaxed font-medium">
        Spesialisasi dalam pembuatan <span class="text-slate-800 font-bold border-b-2 border-orange-200">Shop Drawing AutoCAD 2D</span> untuk sistem tata udara (HVAC). Fokus pada presisi rute ducting, penempatan unit, dan koordinasi ruang mesin.
      </p>
    </section>

    <!-- Project Showcase: Real Drawings -->
    <section class="mb-16 md:mb-24">
      <div class="flex items-center gap-4 mb-8 md:mb-12">
        <h2 class="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-slate-300 italic">Project_Draft_Exhibit</h2>
        <div class="flex-1 h-px bg-slate-100"></div>
      </div>

      <!-- Feature: Main Technical Drawing -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
        <div class="lg:col-span-8 group relative overflow-hidden rounded-xl md:rounded-2xl border border-slate-200 shadow-xl bg-white order-2 lg:order-1">
          <div class="absolute top-4 left-4 z-10">
            <span class="bg-slate-800 text-white px-2 py-1 font-mono text-[8px] md:text-[9px] uppercase tracking-widest">MAJOR_LAYOUT_PLAN</span>
          </div>
          <img 
            :src="mechPhoto2" 
            class="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="Mechanical Shop Drawing Layout"
          />
        </div>
        <div class="lg:col-span-4 flex flex-col justify-center space-y-4 md:space-y-6 order-1 lg:order-2">
          <div class="space-y-2">
            <h3 class="text-xl md:text-3xl font-bold text-slate-700 uppercase tracking-tighter">HVAC Ducting Layout</h3>
            <p class="text-slate-400 font-mono text-[9px] md:text-[10px] uppercase tracking-widest">Detail_01 // Coordination_Plan</p>
          </div>
          <p class="text-slate-500 text-sm md:text-base leading-relaxed">
            Pengaturan rute ducting AC yang presisi untuk meminimalkan *clash*. Dioptimalkan untuk aliran udara maksimal.
          </p>
          <div class="pt-2 md:pt-4 flex gap-3 md:gap-4">
             <div class="p-3 border border-slate-100 bg-slate-50 rounded-lg flex-1">
               <p class="text-[8px] md:text-[9px] text-slate-400 uppercase tracking-widest mb-1 font-bold">Standard</p>
               <p class="text-[10px] md:text-xs font-bold text-slate-600 uppercase">SMACNA / SNI</p>
             </div>
             <div class="p-3 border border-slate-100 bg-slate-50 rounded-lg flex-1">
               <p class="text-[8px] md:text-[9px] text-slate-400 uppercase tracking-widest mb-1 font-bold">Software</p>
               <p class="text-[10px] md:text-xs font-bold text-slate-600 uppercase">AutoCAD</p>
             </div>
          </div>
        </div>
      </div>

      <!-- Grid: Technical Details -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <div v-for="(photo, index) in [mechPhoto1, mechPhoto3, mechPhoto4]" :key="index" class="group">
          <div class="aspect-square rounded-xl overflow-hidden border border-slate-200 mb-4 bg-white shadow-sm hover:shadow-xl transition-all duration-500">
             <img 
              :src="photo" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Technical Detail Drawing"
            />
          </div>
          <div class="px-1">
            <h4 class="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-tight">Detail Section 0{{ index + 1 }}</h4>
            <p class="text-slate-400 font-mono text-[8px] md:text-[9px] uppercase tracking-widest mt-1">Ref_Spec: ME-{{ 100 + index }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Proficiency -->
    <section class="mb-16 md:mb-24 bg-slate-50 p-8 md:p-16 rounded-2xl md:rounded-[3rem] border border-slate-100">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xl md:text-3xl font-bold text-slate-700 mb-10 md:mb-12 text-center uppercase tracking-tighter">Lingkup Keahlian Mechanical</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div class="space-y-6 md:space-y-8">
             <div class="flex gap-4 md:gap-6">
                <div class="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white shadow-sm border border-slate-100 flex items-center justify-center rounded-lg md:rounded-xl text-orange-500">
                   <span class="material-symbols-outlined">hvac</span>
                </div>
                <div class="space-y-1">
                   <h4 class="font-bold text-slate-700 uppercase text-xs md:text-sm">HVAC Ducting & Piping</h4>
                   <p class="text-slate-500 text-xs md:text-sm leading-snug">Penyusunan gambar kerja rute ducting supply/return dan pemipaan chiller/VRV.</p>
                </div>
             </div>
             <div class="flex gap-4 md:gap-6">
                <div class="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white shadow-sm border border-slate-100 flex items-center justify-center rounded-lg md:rounded-xl text-orange-500">
                   <span class="material-symbols-outlined">settings_input_component</span>
                </div>
                <div class="space-y-1">
                   <h4 class="font-bold text-slate-700 uppercase text-xs md:text-sm">Plant Room Coordination</h4>
                   <p class="text-slate-500 text-xs md:text-sm leading-snug">Detail penempatan unit chiller dan pompa untuk akses pemeliharaan.</p>
                </div>
             </div>
          </div>
          <div class="space-y-6 md:space-y-8">
             <div class="flex gap-4 md:gap-6">
                <div class="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white shadow-sm border border-slate-100 flex items-center justify-center rounded-lg md:rounded-xl text-orange-500">
                   <span class="material-symbols-outlined">document_scanner</span>
                </div>
                <div class="space-y-1">
                   <h4 class="font-bold text-slate-700 uppercase text-xs md:text-sm">As-Built Drawing</h4>
                   <p class="text-slate-500 text-xs md:text-sm leading-snug">Pendokumentasian perubahan lapangan untuk serah terima proyek.</p>
                </div>
             </div>
             <div class="flex gap-4 md:gap-6">
                <div class="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white shadow-sm border border-slate-100 flex items-center justify-center rounded-lg md:rounded-xl text-orange-500">
                   <span class="material-symbols-outlined">rule_folder</span>
                </div>
                <div class="space-y-1">
                   <h4 class="font-bold text-slate-700 uppercase text-sm">Design Review</h4>
                   <p class="text-slate-500 text-sm leading-snug">Meninjau desain perencanaan untuk kelayakan implementasi lapangan.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final Call to Action -->
    <section class="text-center py-12 md:py-20 border-t border-slate-100">
        <h2 class="text-2xl md:text-3xl font-bold text-slate-700 mb-8 uppercase tracking-tighter">Butuh Detail Teknis Mechanical?</h2>
        <div class="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-6">
          <a href="https://drive.google.com/file/d/1LY-c0jXf-VyIGRMKf4T67GFJBx7epR9j/view?usp=sharing" target="_blank" class="px-8 py-3 md:px-10 md:py-4 bg-slate-700 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-orange-500 transition-colors rounded-lg">Download CV (.PDF)</a>
          <router-link to="/skills-contact" class="px-8 py-3 md:px-10 md:py-4 border border-slate-300 text-slate-600 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:border-orange-500 hover:text-orange-500 transition-colors rounded-lg">Hubungi Saya</router-link>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import mechPhoto1 from '../assets/mechanical/WhatsApp Image 2026-04-24 at 19.30.54.jpeg'
import mechPhoto2 from '../assets/mechanical/WhatsApp Image 2026-04-24 at 19.30.54 (1).jpeg'
import mechPhoto3 from '../assets/mechanical/WhatsApp Image 2026-04-24 at 19.30.55.jpeg'
import mechPhoto4 from '../assets/mechanical/WhatsApp Image 2026-04-24 at 19.30.59.jpeg'
</script>

<style scoped>
.blueprint-grid {
  background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>

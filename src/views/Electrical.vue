<template>
  <div class="blueprint-grid min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
    <!-- Hero Section -->
    <section class="mb-12 md:mb-20 border-l-4 border-orange-500 pl-6 md:pl-8 pt-8 md:pt-12">
      <div class="flex items-center space-x-3 text-orange-600 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4">
        <span class="w-2.5 h-2.5 md:w-3 md:h-3 bg-orange-600"></span>
        <span class="font-bold">Technical_Focus // ELECTRICAL_SYSTEMS</span>
      </div>
      <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-700 mb-6 leading-tight uppercase tracking-tighter">Electrical <br/><span class="text-slate-400">Design & Drafting</span></h1>
      <p class="text-slate-500 max-w-2xl text-sm md:text-lg leading-relaxed font-medium">
        Keahlian dalam perancangan sistem distribusi tenaga listrik, penerangan, dan koordinasi panel. Fokus pada pembuatan <span class="text-slate-800 font-bold border-b-2 border-orange-200">Single Line Diagram</span> dan <span class="text-slate-800 font-bold border-b-2 border-orange-200">Power Layout</span> yang memenuhi standar regulasi teknis.
      </p>
    </section>

    <!-- PDF Document Exhibit -->
    <section class="mb-16 md:mb-24">
      <div class="flex items-center gap-4 mb-8 md:mb-12">
        <h2 class="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-slate-300 italic">Technical_Document_Showcase</h2>
        <div class="flex-1 h-px bg-slate-100"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <!-- Main PDF Document -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <div class="space-y-1">
              <h3 class="text-xl md:text-2xl font-bold text-slate-700 uppercase tracking-tighter line-clamp-1">Primary Electrical Mapping (EL-01)</h3>
              <p class="text-slate-400 font-mono text-[9px] md:text-[10px] uppercase tracking-widest">Digital_Blueprint // Final_Revision</p>
            </div>
            <a :href="pdf1" target="_blank" class="text-[10px] md:text-xs font-bold text-orange-500 hover:underline flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">open_in_new</span>
              Full Screen
            </a>
          </div>
          <div class="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl shadow-xl overflow-hidden group">
            <iframe :src="pdf1" class="w-full h-full border-none" title="Electrical Document 1"></iframe>
          </div>
          <p class="text-[10px] text-slate-400 italic text-center sm:hidden">Gunakan dua jari untuk scroll dalam dokumen</p>
        </div>

        <!-- Secondary PDF Documents -->
        <div class="space-y-4">
          <div class="flex justify-between items-end">
            <h4 class="text-base md:text-lg font-bold text-slate-600 uppercase tracking-tight">System Schematic (EL-02)</h4>
            <a :href="pdf2" target="_blank" class="text-[10px] font-bold text-slate-400 hover:text-orange-500 transition-colors uppercase">View</a>
          </div>
          <div class="aspect-[4/3] sm:aspect-square bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
            <iframe :src="pdf2" class="w-full h-full border-none" title="Electrical Document 2"></iframe>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex justify-between items-end">
            <h4 class="text-base md:text-lg font-bold text-slate-600 uppercase tracking-tight">Circuit Layout (EL-03)</h4>
            <a :href="pdf3" target="_blank" class="text-[10px] font-bold text-slate-400 hover:text-orange-500 transition-colors uppercase">View</a>
          </div>
          <div class="aspect-[4/3] sm:aspect-square bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
            <iframe :src="pdf3" class="w-full h-full border-none" title="Electrical Document 3"></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Core Areas -->
    <section class="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <div class="p-6 md:p-8 bg-white border border-slate-100 shadow-sm rounded-2xl space-y-4">
        <span class="material-symbols-outlined text-orange-500 text-3xl">bolt</span>
        <h4 class="font-bold text-slate-700 uppercase text-sm md:text-base">Power Distribution</h4>
        <p class="text-slate-500 text-xs md:text-sm leading-relaxed">Perancangan jalur kabel tegangan rendah (LV) dan koordinasi panel distribusi dari MSB ke SDP.</p>
      </div>
      <div class="p-6 md:p-8 bg-white border border-slate-100 shadow-sm rounded-2xl space-y-4">
        <span class="material-symbols-outlined text-orange-500 text-3xl">light</span>
        <h4 class="font-bold text-slate-700 uppercase text-sm md:text-base">Lighting Control</h4>
        <p class="text-slate-500 text-xs md:text-sm leading-relaxed">Penempatan titik lampu dan perencanaan sirkuit saklar/kontrol secara efisien.</p>
      </div>
      <div class="p-6 md:p-8 bg-white border border-slate-100 shadow-sm rounded-2xl space-y-4">
        <span class="material-symbols-outlined text-orange-500 text-3xl">account_tree</span>
        <h4 class="font-bold text-slate-700 uppercase text-sm md:text-base">Single Line Diagram</h4>
        <p class="text-slate-500 text-xs md:text-sm leading-relaxed">Penyusunan skematik beban, proteksi, dan *metering* sistem kelistrikan.</p>
      </div>
    </section>

    <!-- Download CTA -->
    <section class="text-center py-12 md:py-20 bg-slate-900 rounded-2xl md:rounded-[3rem] text-white px-6">
        <div class="mb-4 md:mb-6 inline-block border border-orange-500/50 px-4 py-1 text-orange-500 font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-widest">
          TECHNICAL_ACCESS
        </div>
        <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8 uppercase tracking-tighter">Butuh Penjelasan Teknis?</h2>
        <div class="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <a :href="pdf1" download class="px-8 py-3 md:px-10 md:py-4 bg-orange-600 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-orange-500 transition-colors rounded-full">Unduh Dokumen Utama</a>
          <router-link to="/skills-contact" class="px-8 py-3 md:px-10 md:py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-slate-900 transition-colors rounded-full">Hubungi Saya</router-link>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import pdf1 from '../assets/electical/EL-01.pdf'
import pdf2 from '../assets/electical/EL-02.pdf'
import pdf3 from '../assets/electical/EL-03.pdf'
</script>

<style scoped>
.blueprint-grid {
  background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>

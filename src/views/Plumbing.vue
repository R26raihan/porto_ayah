<template>
  <div class="blueprint-grid min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
    <!-- Hero Section -->
    <section class="mb-12 md:mb-20 border-l-4 border-orange-500 pl-6 md:pl-8 pt-8 md:pt-12">
      <div class="flex items-center space-x-3 text-orange-600 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4">
        <span class="w-2.5 h-2.5 md:w-3 md:h-3 bg-orange-600"></span>
        <span class="font-bold">Technical_Focus // PLUMBING_HYDRAULIC</span>
      </div>
      <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-700 mb-6 leading-tight uppercase tracking-tighter">Plumbing & <br/><span class="text-slate-400">Hydraulic Design</span></h1>
      <p class="text-slate-500 max-w-2xl text-sm md:text-lg leading-relaxed font-medium">
        Spesialisasi dalam perancangan sistem distribusi air bersih, pengelolaan air kotor, dan jaringan vent piping. Fokus pada pembuatan <span class="text-slate-800 font-bold border-b-2 border-orange-200">Isometric Drawing</span> yang presisi untuk memudahkan instalasi di lapangan.
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
              <h3 class="text-xl md:text-2xl font-bold text-slate-700 uppercase tracking-tighter line-clamp-1">Main Plumbing Layout (PL-01)</h3>
              <p class="text-slate-400 font-mono text-[9px] md:text-[10px] uppercase tracking-widest">Digital_Blueprint // Hydraulic_Plan</p>
            </div>
            <a :href="pdf1" target="_blank" class="text-[10px] md:text-xs font-bold text-orange-500 hover:underline flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">open_in_new</span>
              Full Screen
            </a>
          </div>
          <div class="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl shadow-xl overflow-hidden group">
            <iframe :src="pdf1" class="w-full h-full border-none" title="Plumbing Document 1"></iframe>
          </div>
          <p class="text-[10px] text-slate-400 italic text-center sm:hidden">Gunakan dua jari untuk scroll dalam dokumen</p>
        </div>

        <!-- Secondary PDF Grid -->
        <div class="space-y-4">
          <div class="flex justify-between items-end">
            <h4 class="text-base md:text-lg font-bold text-slate-600 uppercase tracking-tight">Riser Diagram (PL-02)</h4>
            <a :href="pdf2" target="_blank" class="text-[10px] font-bold text-slate-400 hover:text-orange-500 transition-colors uppercase">View</a>
          </div>
          <div class="aspect-[4/3] sm:aspect-square bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
            <iframe :src="pdf2" class="w-full h-full border-none" title="Plumbing Document 2"></iframe>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex justify-between items-end">
            <h4 class="text-base md:text-lg font-bold text-slate-600 uppercase tracking-tight">Isometric Detail (PL-03)</h4>
            <a :href="pdf3" target="_blank" class="text-[10px] font-bold text-slate-400 hover:text-orange-500 transition-colors uppercase">View</a>
          </div>
          <div class="aspect-[4/3] sm:aspect-square bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
            <iframe :src="pdf3" class="w-full h-full border-none" title="Plumbing Document 3"></iframe>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex justify-between items-end">
            <h4 class="text-base md:text-lg font-bold text-slate-600 uppercase tracking-tight">Water Tank System (PL-04)</h4>
            <a :href="pdf4" target="_blank" class="text-[10px] font-bold text-slate-400 hover:text-orange-500 transition-colors uppercase">View</a>
          </div>
          <div class="aspect-[4/3] sm:aspect-square bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
            <iframe :src="pdf4" class="w-full h-full border-none" title="Plumbing Document 4"></iframe>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex justify-between items-end">
            <h4 class="text-base md:text-lg font-bold text-slate-600 uppercase tracking-tight">Distribution Detail (PL-05)</h4>
            <a :href="pdf5" target="_blank" class="text-[10px] font-bold text-slate-400 hover:text-orange-500 transition-colors uppercase">View</a>
          </div>
          <div class="aspect-[4/3] sm:aspect-square bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
            <iframe :src="pdf5" class="w-full h-full border-none" title="Plumbing Document 5"></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Core Areas -->
    <section class="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <div class="p-6 md:p-8 bg-white border border-slate-100 shadow-sm rounded-2xl space-y-4">
        <span class="material-symbols-outlined text-orange-500 text-3xl">water_drop</span>
        <h4 class="font-bold text-slate-700 uppercase text-sm md:text-base">Water Distribution</h4>
        <p class="text-slate-500 text-xs md:text-sm leading-relaxed">Perancangan sistem air bersih (cold/hot water) dengan perhitungan debit dan tekanan yang akurat.</p>
      </div>
      <div class="p-6 md:p-8 bg-white border border-slate-100 shadow-sm rounded-2xl space-y-4">
        <span class="material-symbols-outlined text-orange-500 text-3xl">waves</span>
        <h4 class="font-bold text-slate-700 uppercase text-sm md:text-base">Waste & Vent Piping</h4>
        <p class="text-slate-500 text-xs md:text-sm leading-relaxed">Pengelolaan limbah cair dan sistem udara (vent) untuk mencegah bau dan tekanan balik pada pipa.</p>
      </div>
      <div class="p-6 md:p-8 bg-white border border-slate-100 shadow-sm rounded-2xl space-y-4">
        <span class="material-symbols-outlined text-orange-500 text-3xl">architecture</span>
        <h4 class="font-bold text-slate-700 uppercase text-sm md:text-base">Isometric Detailing</h4>
        <p class="text-slate-500 text-xs md:text-sm leading-relaxed">Pembuatan gambar isometrik 3D-projection untuk memudahkan tim konstruksi dalam instalasi pipa.</p>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="text-center py-12 md:py-20 bg-slate-900 rounded-2xl md:rounded-[3rem] text-white px-6">
        <div class="mb-4 md:mb-6 inline-block border border-orange-500/50 px-4 py-1 text-orange-500 font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-widest">
          TECHNICAL_HYDRAULIC
        </div>
        <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8 uppercase tracking-tighter">Butuh Konsultasi Sistem Plumbing?</h2>
        <div class="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <a :href="pdf1" download class="px-8 py-3 md:px-10 md:py-4 bg-orange-600 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-orange-500 transition-colors rounded-full">Unduh Drawing Utama</a>
          <router-link to="/skills-contact" class="px-8 py-3 md:px-10 md:py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-slate-900 transition-colors rounded-full">Hubungi Saya</router-link>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import pdf1 from '../assets/plumbing/PL-01.pdf'
import pdf2 from '../assets/plumbing/PL-02.pdf'
import pdf3 from '../assets/plumbing/PL-03.pdf'
import pdf4 from '../assets/plumbing/PL-04.pdf'
import pdf5 from '../assets/plumbing/PL-05.pdf'
</script>

<style scoped>
.blueprint-grid {
  background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>

<template>
  <div class="minimal-blueprint min-h-screen pb-24">
    <!-- Sophisticated Header / Hero -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-28 mb-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div class="lg:col-span-8">
          <div class="flex items-center gap-3 mb-6 opacity-60">
            <div class="w-12 h-px bg-slate-900 font-bold"></div>
            <span class="font-mono text-[10px] uppercase tracking-[0.4em] text-slate-500">Curriculum_Portofolio</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-light text-slate-800 leading-[1.1] mb-8 tracking-tight">
            Andri Sulistiawan
          </h1>
          <h2 class="text-lg md:text-xl text-slate-400 font-normal max-w-2xl leading-relaxed mb-12">
            Senior MEP Drafter & Engineer dengan pengalaman dua dekade (20 tahun) dalam teknis koordinasi proyek apartemen, perhotelan, dan infrastruktur komersial. Berdedikasi pada akurasi gambar kerja dan standar kualitas teknis yang tinggi.
          </h2>
          <div class="flex flex-col sm:flex-row gap-8 items-start sm:items-center pt-4">
             <router-link to="/portfolio" class="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-800 hover:text-orange-500 transition-colors">
               Eksplorasi Proyek
               <span class="w-8 h-px bg-slate-400 group-hover:w-12 group-hover:bg-orange-500 transition-all"></span>
             </router-link>
             <span class="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></span>
             <a href="mailto:andregaia430@gmail.com" class="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
               Hubungi Langsung
             </a>
          </div>
        </div>
        <div class="lg:col-span-4 hidden lg:block">
           <div class="aspect-[3/4] bg-slate-100 border border-slate-200 overflow-hidden relative transition-all duration-1000 shadow-2xl">
             <img 
               alt="Andri Sulistiawan" 
               class="w-full h-full object-cover" 
               src="../assets/image.png"
             />
             <div class="absolute inset-0 border-[10px] border-white/20 pointer-events-none"></div>
           </div>
        </div>
      </div>
    </section>

    <!-- Project Exhibit Section -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 mb-32">
      <div class="mb-16">
        <h3 class="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-300 mb-4 italic">Featured_Exhibition</h3>
        <div class="h-px w-full bg-slate-100"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
        <!-- Main Project -->
        <div class="md:col-span-7 space-y-8">
           <router-link to="/portfolio" class="block aspect-[16/9] overflow-hidden bg-slate-100 border border-slate-200 shadow-xl rounded-sm group">
              <img 
                :src="gaiaHero" 
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Hotel Gaia Bandung"
              />
           </router-link>
           <div class="space-y-4">
              <div class="flex items-center gap-2">
                 <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hotel & Hospitality</span>
                 <span class="w-1 h-1 rounded-full bg-slate-200"></span>
                 <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">2021 Project Highlight</span>
              </div>
              <h4 class="text-2xl font-normal text-slate-800 uppercase tracking-tight">The Gaia Hotel - Bandung</h4>
              <p class="text-slate-500 text-base leading-relaxed max-w-xl">
                Koordinasi teknis menyeluruh untuk sistem MEP pada hotel bintang lima premium. Fokus pada akurasi shop drawing 2D untuk meminimalkan kendala instalasi lapangan.
              </p>
           </div>
        </div>

        <!-- Discipline List with Small Previews -->
        <div class="md:col-span-5 flex flex-col justify-between py-2">
           <div class="divide-y divide-slate-100">
              <router-link to="/mechanical" class="group py-8 flex items-center gap-6 hover:px-2 transition-all">
                 <div class="w-20 h-20 shrink-0 bg-slate-100 border border-slate-200 overflow-hidden">
                    <img :src="mechThumb" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Mechanical preview"/>
                 </div>
                 <div class="flex-grow">
                    <h5 class="text-sm font-bold text-slate-800 uppercase tracking-widest">Mechanical (HVAC)</h5>
                    <p class="text-xs text-slate-400">Ducting layout & coordination</p>
                 </div>
                 <span class="material-symbols-outlined text-slate-300 group-hover:text-orange-500 transition-colors">north_east</span>
              </router-link>
              <router-link to="/electrical" class="group py-8 flex items-center gap-6 hover:px-2 transition-all">
                 <div class="w-20 h-20 shrink-0 bg-slate-100 border border-slate-200 overflow-hidden">
                    <img src="https://images2.imgbox.com/bf/84/0SCDb3W4_o.jpg" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Electrical preview"/>
                 </div>
                 <div class="flex-grow">
                    <h5 class="text-sm font-bold text-slate-800 uppercase tracking-widest">Electrical Distribution</h5>
                    <p class="text-xs text-slate-400">Power & SLD Drafting</p>
                 </div>
                 <span class="material-symbols-outlined text-slate-300 group-hover:text-orange-500 transition-colors">north_east</span>
              </router-link>
              <router-link to="/plumbing" class="group py-8 flex items-center gap-6 hover:px-2 transition-all">
                 <div class="w-20 h-20 shrink-0 bg-slate-100 border border-slate-200 overflow-hidden">
                    <img :src="plumbingThumb" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Plumbing preview"/>
                 </div>
                 <div class="flex-grow">
                    <h5 class="text-sm font-bold text-slate-800 uppercase tracking-widest">Plumbing & Hydraulic</h5>
                    <p class="text-xs text-slate-400">Piping & Isometric systems</p>
                 </div>
                 <span class="material-symbols-outlined text-slate-300 group-hover:text-orange-500 transition-colors">north_east</span>
              </router-link>
           </div>
           
           <div class="pt-12">
              <div class="p-8 bg-slate-50 border border-slate-100 space-y-4">
                 <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Core_Value</p>
                 <p class="text-sm text-slate-600 leading-relaxed italic">
                    "Penyelesaian masalah MEP di atas kertas jauh lebih ekonomis daripada perbaikan di lapangan. Presisi adalah mandatori."
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>

    <!-- Trust Factors -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
       <div class="space-y-4">
          <span class="text-4xl font-light text-slate-800 italic">20+</span>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Years of Practice</p>
          <p class="text-sm text-slate-500 leading-relaxed">Berkarir sejak tahun 2003, melewati berbagai evolusi standar teknis MEP di industri konstruksi Indonesia.</p>
       </div>
       <div class="space-y-4">
          <span class="text-4xl font-light text-slate-800 italic">50+</span>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Project Completed</p>
          <p class="text-sm text-slate-500 leading-relaxed">Dari High-Rise Apartment hingga infrastruktur kritikal seperti Rumah Sakit dan Data Center.</p>
       </div>
       <div class="space-y-4">
          <span class="text-4xl font-light text-slate-800 italic">CAD</span>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Craftmanship</p>
          <p class="text-sm text-slate-500 leading-relaxed">Dedikasi pada kebersihan dan akurasi garis dalam AutoCAD 2D untuk standarisasi drawing yang mumpuni.</p>
       </div>
    </section>

    <!-- Contact CTA -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 text-center">
       <div class="bg-slate-900 py-24 md:py-32 px-6 rounded-sm text-white">
          <h2 class="text-3xl md:text-4xl font-light mb-8 lg:mb-12">Siap bekerja bersama untuk <br class="hidden md:block"/> akurasi proyek bapak?</h2>
          <div class="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
             <a href="https://drive.google.com/file/d/1byCT2IVSkKbtNnCiVIFRWCtEVBiH_1WZ/view?usp=sharing" target="_blank" class="text-xs font-bold uppercase tracking-widest hover:text-orange-500 transition-colors border-b border-white/20 pb-2">Download CV Lengkap</a>
             <router-link to="/skills-contact" class="text-xs font-bold uppercase tracking-widest hover:text-orange-500 transition-colors border-b border-white/20 pb-2">Detail & Kontak</router-link>
          </div>
       </div>
    </section>

    <!-- Copyright Sub-Footer -->
    <footer class="max-w-7xl mx-auto px-6 md:px-12 mt-32 border-t border-slate-100 pt-8 flex justify-between opacity-30 text-[9px] font-mono uppercase tracking-[0.3em]">
       <span>Andri Sulistiawan // MEP Engineer</span>
       <span>Design Framework v5.2</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import gaiaHero from '../assets/WhatsApp Image 2026-04-24 at 19.31.18.jpeg'
import mechThumb from '../assets/mechanical/WhatsApp Image 2026-04-24 at 19.30.54.jpeg'
import plumbingThumb from '../assets/mechanical/WhatsApp Image 2026-04-24 at 19.30.55.jpeg'
</script>

<style scoped>
.minimal-blueprint {
  background-image: 
    linear-gradient(to right, #fcfcfc 1px, transparent 1px),
    linear-gradient(to bottom, #fcfcfc 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>

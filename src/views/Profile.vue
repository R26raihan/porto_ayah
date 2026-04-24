<template>
  <div class="blueprint-grid min-h-screen p-6 md:p-12 lg:p-16 overflow-y-auto bg-slate-50">
    <div class="max-w-6xl mx-auto space-y-12 pb-24">
      
      <!-- Section: Professional Hero Header -->
      <section class="relative overflow-hidden bg-white border border-slate-200 shadow-xl rounded-xl">
        <!-- Background Accent -->
        <div class="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-24 -z-0 opacity-50"></div>
        
        <div class="relative z-10 flex flex-col md:flex-row gap-10 p-8 md:p-14 mb-0">
          <!-- Profile Photo with cool effect -->
          <div class="relative shrink-0 mx-auto md:mx-0">
            <div class="relative w-40 h-40 md:w-52 md:h-52">
              <!-- Animated Rings or Borders -->
              <div class="absolute -inset-2 border border-orange-500/20 rounded-full animate-spin-slow"></div>
              <div class="absolute -inset-4 border border-slate-200 rounded-full"></div>
              
              <div class="w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden relative group">
                <img 
                  alt="Andri Sulistiawan Portrait" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="../assets/image.png"
                />

              </div>
              
              <!-- Status Indicator -->
              <div class="absolute bottom-2 right-6 w-6 h-6 bg-white rounded-full p-1 shadow-lg">
                <div class="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <!-- Profile Details -->
          <div class="flex-1 space-y-6 flex flex-col justify-center">
            <div class="space-y-2">
              <div class="flex items-center gap-3 justify-center md:justify-start">
                 <span class="bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">Senior Professional</span>
                 <div class="flex -space-x-1">
                    <div class="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div class="w-2 h-2 rounded-full bg-orange-500"></div>
                 </div>
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-700 tracking-tighter text-center md:text-left uppercase">
                Andri <span class="text-orange-500">Sulistiawan</span>
              </h1>
              <div class="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 font-mono text-sm text-slate-500 uppercase tracking-widest">
                <span>DRAUGHTSMAN_SR</span>
                <span class="w-1.5 h-1.5 bg-orange-500 rounded-full hidden md:block"></span>
                <span>MEP_ENGINEER</span>
                <span class="w-1.5 h-1.5 bg-orange-500 rounded-full hidden md:block"></span>
                <span>20+ YEARS_ACTIVE</span>
              </div>
            </div>
            
            <div class="h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent"></div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="mailto:andregaia430@gmail.com" class="group flex items-center gap-4 p-3 hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 rounded-lg">
                <div class="w-10 h-10 bg-slate-700 text-white flex items-center justify-center rounded-lg group-hover:bg-orange-500 transition-colors">
                  <span class="material-symbols-outlined text-xl text-white">alternate_email</span>
                </div>
                <div>
                  <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email_Address</p>
                  <p class="text-sm font-mono text-slate-700">andregaia430@gmail.com</p>
                </div>
              </a>
              <div class="group flex items-center gap-4 p-3 hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 rounded-lg">
                <div class="w-10 h-10 bg-slate-700 text-white flex items-center justify-center rounded-lg group-hover:bg-orange-500 transition-colors">
                  <span class="material-symbols-outlined text-xl text-white">call</span>
                </div>
                <div>
                  <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone_Number</p>
                  <p class="text-sm font-mono text-slate-700">+62 815-1380-6273</p>
                </div>
              </div>
              <div class="group flex items-center gap-4 p-3 hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 rounded-lg">
                <div class="w-10 h-10 bg-slate-700 text-white flex items-center justify-center rounded-lg group-hover:bg-orange-500 transition-colors">
                  <span class="material-symbols-outlined text-xl text-white">location_on</span>
                </div>
                <div>
                  <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Base_Location</p>
                  <p class="text-sm font-mono text-slate-700">Tangerang, Banten, ID</p>
                </div>
              </div>
              <div class="flex items-center gap-4 p-3">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Summary / Philosophy -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div class="lg:col-span-2 space-y-6">
            <div class="flex items-center gap-4">
              <h2 class="text-lg font-bold uppercase tracking-[0.3em] text-slate-600 border-l-4 border-orange-500 pl-4">Professional_Bio</h2>
            </div>
            <div class="bg-white border border-slate-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
              <!-- Content -->
              <div class="relative z-10 space-y-8">
                <div>
                  <p class="text-xl md:text-2xl font-bold text-slate-700 leading-tight">
                    "Drafter MEP dan Engineer Senior dengan dedikasi tinggi pada akurasi teknis dan efisiensi koordinasi lapangan."
                  </p>
                </div>

                <div class="h-px w-20 bg-orange-500"></div>

                <div class="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Dengan pengalaman lebih dari <span class="text-orange-600 font-bold">20 tahun</span>, saya telah berkontribusi dalam berbagai proyek skala besar termasuk apartemen, hotel mewah, dan fasilitas kesehatan rumah sakit.
                  </p>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div class="flex gap-4">
                      <div class="shrink-0 w-8 h-8 rounded bg-slate-50 flex items-center justify-center">
                        <span class="material-symbols-outlined text-orange-600 text-sm">draw</span>
                      </div>
                      <p class="text-xs md:text-sm">Spesialisasi dalam pembuatan <span class="font-bold text-slate-700">Shop Drawing AutoCAD 2D</span> yang presisi dan mudah diimplementasikan.</p>
                    </div>
                    <div class="flex gap-4">
                      <div class="shrink-0 w-8 h-8 rounded bg-slate-50 flex items-center justify-center">
                        <span class="material-symbols-outlined text-orange-600 text-sm">groups</span>
                      </div>
                      <p class="text-xs md:text-sm">Ahli dalam <span class="font-bold text-slate-700">koordinasi lintas disiplin</span> untuk memastikan integrasi sistem MEP yang optimal.</p>
                    </div>
                  </div>

                  <p>
                    Fokus utama saya adalah meminimalkan kesalahan konstruksi di lapangan melalui perencanaan gambar kerja yang detail, sistematis, dan sesuai dengan standar teknis yang berlaku.
                  </p>
                </div>
              </div>
              
              <!-- Subtle decorative element -->
              <div class="absolute bottom-0 right-0 w-32 h-32 bg-slate-50 -mb-16 -mr-16 rounded-full -z-0 opacity-50"></div>
            </div>
         </div>
         
         <div class="space-y-6">
            <div class="flex items-center gap-4">
              <h2 class="text-lg font-bold uppercase tracking-[0.2em] text-slate-600">Career_Metrics</h2>
            </div>
            <div class="space-y-4">
               <div class="bg-white border border-slate-200 p-6 shadow-sm group hover:border-orange-500 transition-colors">
                  <p class="text-3xl font-bold text-slate-700 group-hover:text-orange-500 transition-colors">20+</p>
                  <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years of Practice</p>
               </div>
               <div class="bg-white border border-slate-200 p-6 shadow-sm group hover:border-orange-500 transition-colors">
                  <p class="text-3xl font-bold text-slate-700 group-hover:text-orange-500 transition-colors">06</p>
                  <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Leading Companies</p>
               </div>
               <div class="bg-white border border-slate-200 p-6 shadow-sm group hover:border-orange-500 transition-colors">
                  <p class="text-3xl font-bold text-slate-700 group-hover:text-orange-500 transition-colors">08+</p>
                  <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Tier-1 Projects</p>
               </div>
            </div>
         </div>
      </div>

      <!-- Core Standards -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-slate-900 p-8 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between rounded-xl md:rounded-none">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl"></div>
          <div class="space-y-8 relative z-10">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-10 h-10 border border-orange-500/50 flex items-center justify-center">
                 <span class="material-symbols-outlined text-orange-500">architecture</span>
              </div>
              <h3 class="font-bold text-lg md:text-xl tracking-widest uppercase">Work_Philosophy</h3>
            </div>
            <div class="space-y-6">
              <div class="space-y-2 border-l-2 border-orange-500 pl-6">
                <h4 class="font-mono text-[10px] md:text-sm tracking-widest uppercase text-orange-500">PRECISION_MANDATE</h4>
                <p class="text-slate-400 text-xs md:text-sm leading-relaxed">"Setiap milimeter dalam gambar teknis harus mencerminkan realitas fisik lapangan."</p>
              </div>
              <div class="space-y-2 border-l-2 border-slate-700 pl-6">
                <h4 class="font-mono text-[10px] md:text-sm tracking-widest uppercase text-slate-500">COORDINATION_FIRST</h4>
                <p class="text-slate-400 text-xs md:text-sm leading-relaxed">Penyelesaian masalah di atas kertas lebih murah daripada perbaikan di lapangan.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white border border-slate-200 p-8 md:p-12 shadow-sm flex flex-col justify-between rounded-xl md:rounded-none">
          <div>
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 border border-slate-900 flex items-center justify-center">
                 <span class="material-symbols-outlined text-slate-900">verified_user</span>
              </div>
              <h3 class="font-black text-lg md:text-xl tracking-widest uppercase text-slate-900">Core_Proficiency</h3>
            </div>
            <div class="space-y-8 md:space-y-6">
               <div class="space-y-3">
                  <div class="flex justify-between text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-widest uppercase text-slate-400">
                    <span class="max-w-[70%]">Technical Drafting (AutoCAD)</span>
                    <span class="text-orange-500">95%</span>
                  </div>
                  <div class="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full bg-slate-900 w-[95%]"></div>
                  </div>
               </div>
               <div class="space-y-3">
                  <div class="flex justify-between text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-widest uppercase text-slate-400">
                    <span class="max-w-[70%]">MEP System Coordination</span>
                    <span class="text-orange-500">98%</span>
                  </div>
                  <div class="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full bg-slate-900 w-[98%]"></div>
                  </div>
               </div>
               <div class="space-y-3">
                  <div class="flex justify-between text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-widest uppercase text-slate-400">
                    <span class="max-w-[70%]">Site Review & Supervision</span>
                    <span class="text-orange-500">92%</span>
                  </div>
                  <div class="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full bg-slate-900 w-[92%]"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer Metadata -->
      <div class="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50">
        <div class="space-y-1 text-center md:text-left">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

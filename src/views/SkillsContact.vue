<template>
  <div class="technical-grid min-h-screen pb-16 px-6 lg:px-12 max-w-7xl mx-auto pt-12">
    <!-- Header Section -->
    <section class="mb-16 border-b border-outline-variant pb-8">
      <span class="font-label-caps text-secondary uppercase tracking-[0.2em] block mb-2">Technical Core</span>
      <h1 class="font-h1 text-h1 text-primary tracking-tight">Skills &amp; Systems</h1>
    </section>

    <!-- Bento Grid Skills -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
      <!-- Discipline Expertise -->
      <div class="md:col-span-8 bg-surface-container-lowest border border-outline p-8 relative overflow-hidden">
        <h3 class="font-h3 text-h3 mb-8 flex items-center gap-2">
          <span class="material-symbols-outlined">architecture</span>
          MEP Disciplines
        </h3>
        <div class="space-y-8">
          <div>
            <div class="flex justify-between items-end mb-2">
              <span class="font-label-caps text-on-surface uppercase">MEP Planning &amp; Drawing</span>
              <span class="font-mono-data text-xs text-outline italic">Mastery</span>
            </div>
            <div class="h-6 w-full border border-outline relative">
              <div class="h-full bg-primary-container ruler-markings w-[98%]"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-end mb-2">
              <span class="font-label-caps text-on-surface uppercase">Design Review &amp; Analysis</span>
              <span class="font-mono-data text-xs text-outline italic">Advanced</span>
            </div>
            <div class="h-6 w-full border border-outline relative">
              <div class="h-full bg-primary-container ruler-markings w-[95%]"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-end mb-2">
              <span class="font-label-caps text-on-surface uppercase">Site Supervision</span>
              <span class="font-mono-data text-xs text-outline italic">Expert</span>
            </div>
            <div class="h-6 w-full border border-outline relative">
              <div class="h-full bg-primary-container ruler-markings w-[92%]"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Software Stack -->
      <div class="md:col-span-4 bg-primary text-on-primary p-8 border border-primary relative">
        <h3 class="font-h3 text-h3 mb-8 text-on-primary">Technical Toolkit</h3>
        <div class="space-y-6">
          <div v-for="software in ['AutoCAD (expert)', 'Shop Drawing Prep', 'Technical Review', 'Site Coordination', 'MEP Implementation']" :key="software" class="flex items-center justify-between border-b border-white/10 pb-2">
            <span class="font-label-caps text-[11px]">{{ software }}</span>
            <span class="material-symbols-outlined text-orange-500 text-sm">verified</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
      <div>
        <span class="font-label-caps text-secondary uppercase tracking-[0.2em] block mb-2">Contact Channels</span>
        <h2 class="font-h2 text-h2 text-primary mb-6">Let's Coordinate</h2>
        <p class="font-body-md text-on-surface-variant mb-12 max-w-md">
          Tersedia untuk konsultasi teknis sistem MEP, pembuatan shop drawing, dan pengawasan proyek skala besar.
        </p>

        <div class="space-y-6">
          <!-- Email -->
          <a href="mailto:andregaia430@gmail.com" class="flex items-center gap-4 group cursor-pointer decoration-none text-inherit">
            <div class="w-12 h-12 bg-white flex items-center justify-center border border-outline group-hover:bg-primary group-hover:text-on-primary transition-all">
              <span class="material-symbols-outlined">alternate_email</span>
            </div>
            <div>
              <p class="font-label-caps text-outline text-[10px]">DIRECT_MAIL</p>
              <p class="font-mono-data text-body-md font-bold">andregaia430@gmail.com</p>
            </div>
          </a>

          <!-- Phone (WhatsApp) -->
          <a href="https://wa.me/6281513806273" target="_blank" class="flex items-center gap-4 group cursor-pointer decoration-none text-inherit">
            <div class="w-12 h-12 bg-white flex items-center justify-center border border-outline group-hover:bg-primary group-hover:text-on-primary transition-all">
              <span class="material-symbols-outlined">call</span>
            </div>
            <div>
              <p class="font-label-caps text-outline text-[10px]">PHONE_WHATSAPP</p>
              <p class="font-mono-data text-body-md font-bold">+62 815 1380 6273</p>
            </div>
          </a>

          <!-- Location -->
          <div class="flex items-center gap-4 group cursor-pointer">
            <div class="w-12 h-12 bg-white flex items-center justify-center border border-outline group-hover:bg-primary group-hover:text-on-primary transition-all">
              <span class="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p class="font-label-caps text-outline text-[10px]">BASE_LOCATION</p>
              <p class="font-mono-data text-body-md font-bold">Tangerang, Banten</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Message Form -->
      <!-- <div class="bg-surface-container-low border border-outline p-8 shadow-[8px_8px_0px_0px_rgba(5,17,37,0.1)] relative">
        <div class="absolute -top-3 -right-3 w-6 h-6 bg-orange-500"></div>
        <form @submit.prevent class="space-y-6">
          <div class="space-y-4">
            <div class="relative">
              <label class="font-label-caps text-[10px] text-outline absolute -top-2 left-2 bg-surface-container-low px-1">NAME_ID</label>
              <input class="w-full border border-outline-variant bg-white p-4 font-mono-data focus:ring-0 focus:border-orange-500 transition-colors" placeholder="Input Name" type="text"/>
            </div>
            <div class="relative">
              <label class="font-label-caps text-[10px] text-outline absolute -top-2 left-2 bg-surface-container-low px-1">MESSAGE_CONTENT</label>
              <textarea class="w-full border border-outline-variant bg-white p-4 font-mono-data focus:ring-0 focus:border-orange-500 transition-colors h-32" placeholder="Describe Project Requirement"></textarea>
            </div>
          </div>
          <button class="w-full bg-primary text-on-primary p-4 font-label-caps uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2" type="submit">
            REACH_OUT <span class="material-symbols-outlined text-sm">rocket_launch</span>
          </button>
        </form>
      </div> -->
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

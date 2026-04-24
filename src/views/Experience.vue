<template>
  <div class="drafting-grid min-h-screen px-6 md:px-12 pb-20 max-w-7xl mx-auto">
    <!-- Hero / Bio Section -->
    <section class="max-w-4xl pt-12 mb-20 text-center md:text-left">
      <div class="border-l-4 border-orange-500 pl-8">
        <h1 class="text-4xl md:text-6xl font-bold text-slate-700 mb-6 leading-none uppercase">Akurasi Engineering <br/>Membangun Realitas.</h1>
        <p class="text-slate-500 max-w-2xl mb-8 leading-relaxed">
          Drafter MEP dan Engineer Senior dengan pengalaman lebih dari 20 tahun pada proyek apartemen, hotel, dan rumah sakit. Memiliki keahlian dalam shop drawing, review desain, koordinasi lintas disiplin, serta pengawasan sistem MEP sesuai standar teknis.
        </p>
        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
          <div class="border border-slate-200 p-4 bg-white shadow-sm">
            <span class="block font-mono text-slate-700 text-lg font-bold underline">20+</span>
            <span class="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none">YEARS_EXP</span>
          </div>
          <div class="border border-slate-200 p-4 bg-white shadow-sm">
            <span class="block font-mono text-slate-700 text-lg font-bold underline">MEP</span>
            <span class="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none">DISCIPLINE</span>
          </div>
          <div class="border border-slate-200 p-4 bg-white shadow-sm">
            <span class="block font-mono text-slate-700 text-lg font-bold underline">CAD</span>
            <span class="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none">2D_DRAFTING</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="mb-20">
      <div class="flex items-center gap-4 mb-10">
        <h2 class="font-h2 text-h2 text-primary whitespace-nowrap">Career Progression</h2>
        <div class="h-[1px] w-full bg-slate-300"></div>
      </div>
      <div class="space-y-12 relative border-l border-slate-300 ml-4 pl-8">
        
        <div v-for="(exp, index) in careerData" :key="index" class="relative">
          <div 
            :class="[
              'absolute -left-[37px] top-1 w-4 h-4 border-4 border-white',
              index === 0 ? 'bg-primary' : 'bg-slate-400'
            ]"
          ></div>
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <span class="font-label-caps text-secondary">{{ exp.period }}</span>
              <h3 class="font-h3 text-h3 text-primary">{{ exp.role }}</h3>
              <p class="font-mono-data text-on-surface-variant mt-1">{{ exp.company }}</p>
            </div>
            <div class="md:max-w-md">
              <p class="text-on-surface-variant mb-4 font-bold text-sm tracking-tight uppercase">PROYEK: {{ exp.project }}</p>
              <ul class="text-on-surface-variant text-sm space-y-2 list-disc pl-4">
                <li v-for="(task, tIndex) in exp.tasks" :key="tIndex">{{ task }}</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Education Section -->
    <section class="mb-20">
      <div class="bg-primary text-white p-8 border-l-8 border-orange-500">
        <span class="font-label-caps text-secondary mb-2 block uppercase tracking-widest">Formal Education</span>
        <h3 class="font-h2 text-h3 mb-2">{{ educationData.school }}</h3>
        <p class="text-slate-400 font-mono">{{ educationData.location }} | {{ educationData.year }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { careerData, educationData } from '../data/career'
</script>

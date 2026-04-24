<template>
  <div class="blueprint-grid min-h-screen pb-12 px-6 md:px-12">
    <!-- Hero Section -->
    <section class="max-w-6xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-7 border-l-[0.5px] border-slate-400 pl-8 relative">
        <div class="absolute -left-[3px] top-0 w-[6px] h-[6px] bg-orange-600"></div>
        <div class="absolute -left-[3px] bottom-0 w-[6px] h-[6px] bg-orange-600"></div>
        <span class="font-label-caps text-secondary mb-4 block">REF_ID: SR_MEP_2024</span>
        <h1 class="font-h1 text-h1 text-primary mb-6 leading-none">
          Andri <br/>
          <span class="text-on-primary-container">Sulistiawan</span>
        </h1>
        <p class="font-body-md text-on-surface-variant max-w-xl mb-10">
          Drafter MEP dan Engineer Senior dengan pengalaman lebih dari 10 tahun pada proyek apartemen, hotel, dan rumah sakit. Memiliki keahlian dalam shop drawing, review desain, koordinasi lintas disiplin, serta pengawasan sistem MEP sesuai standar teknis.
        </p>
        <div class="flex flex-wrap gap-4">
          <router-link to="/portfolio" class="bg-primary text-on-primary px-8 py-4 font-label-caps border border-primary hover:bg-transparent hover:text-primary transition-all flex items-center gap-2">
            VIEW PROJECTS
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </router-link>
          <button class="border border-slate-300 text-slate-900 px-8 py-4 font-label-caps hover:bg-secondary-container hover:border-secondary transition-all">
            TECHNICAL SPECS
          </button>
        </div>
      </div>
      <div class="lg:col-span-5 relative">
        <div class="aspect-square bg-slate-200 border border-slate-300 p-2 overflow-hidden">
          <img 
            alt="Technical Drafting Detail" 
            class="w-full h-full object-cover contrast-100 opacity-100" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG6ooHuS-P4DfByICHspBeV9Tv1SUpwe__puHtaK1XWGzZu9pl4Nur2lZIuEoLi7lDVHo65lHFMYHT5fA9hNG2BqdqyoCtIBcefsb8z_QEpaFcslre0FulkNKDx4-p_CgeHDD25J41woK5cVy8rA5Lvm4En3HgSGJbixUDONetN1458UIw7RLNIda73DJbqZD75lWyUUM4tE2nwQdCrxKyG5vPgcLQpf9MbM7n_FopEgoC29_sEzBygFgsOXK3ZrtDECN6LuJuJwKn"
          />
        </div>
        <!-- Callout Marker -->
        <div class="absolute top-1/2 -right-4 border-l border-orange-500 h-24 flex flex-col justify-center pl-4 bg-white/80 backdrop-blur-sm border-t border-b border-r border-slate-200 px-4">
          <span class="font-mono text-[10px] text-orange-600 font-bold uppercase">Drafting Precision</span>
          <span class="font-h3 text-h3 text-primary">Ultra Detail</span>
        </div>
      </div>
    </section>

    <!-- Bento Grid Portfolio Preview -->
    <section class="max-w-6xl mx-auto mb-20">
      <div class="flex justify-between items-end mb-12 border-b border-slate-200 pb-4">
        <div>
          <h2 class="font-h2 text-h2 text-primary">Technical Portfolio</h2>
          <p class="font-mono-data text-slate-500">PROJECT_LOG: 2021—2024</p>
        </div>
        <div class="text-right">
          <span class="font-mono-data text-[12px] text-slate-400">LOCATION</span>
          <p class="font-mono-data text-slate-900">Tangerang, Banten</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Large Card -->
        <div class="md:col-span-2 group relative border border-slate-300 bg-white p-1 hover:border-orange-500 transition-colors">
          <div class="aspect-[16/9] overflow-hidden relative">
            <img 
              alt="Commercial Skyscraper Project" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN1XRA5t82LQRqgYPhmndpcimZW6E61g5IZIa7oABiGFspyTC1ym5RAgQMKWURI8xH2EIAKc6l7QNbonzr-kiWk6uzxdDxOQUVN2XN_4SczFY4v3P7n_Kp_F7Cw5WncYHqGaDoxH5NuXcIIS00Bfk_Ch-LDVHulnpCqhn1ZuEdl7Nlk08_NGS_BfXMohU34ZmI6a-4uK9nN-5nB9c5UcRb1O7M4t4K-97xGdhnGu1AEuIInGlS8QF1Msh9HK5CjyVmodk0GPyym4xh"
            />
            <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="font-label-caps text-white border border-white px-4 py-2">ANALYZE SYSTEM</span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <span class="bg-slate-900 text-white px-2 py-1 font-label-caps text-[10px]">MECHANICAL / HVAC</span>
              <span class="font-mono-data text-slate-400 text-xs">VER_2.4.0</span>
            </div>
            <h3 class="font-h3 text-primary mb-2">Central Business District Tower</h3>
            <p class="font-body-md text-slate-600 text-sm">Full MEP coordination and shop drawing generation for a 54-story mixed-use development, ensuring zero-clash installation.</p>
          </div>
        </div>
        <!-- Small Card 1 -->
        <div class="group border border-slate-300 bg-white p-1 hover:border-orange-500 transition-colors">
          <div class="aspect-square overflow-hidden bg-slate-100">
            <img 
              alt="Electrical Grid Mapping" 
              class="w-full h-full object-cover brightness-100" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjgUFsAHDAatBL2eDhUABucGBRhujqzyNMmitFKryaNjxPRrmU4Ghp0Fs5c_fhLX1_AecwiLkDZRgv3o2mwxb6S8fmw-zOy7O2VZqzATsYYG6xIEEGLkd8WXtIDXaMHJRQholUeQhpPnQxjUXEijUoK_ezm5RL5hCooTweadcbO95xqHoyfONcV8MF8KZ2zHeopjaxb1nzbQt-Oe85gwo86xOd5zAkTxjrfQa8hr7orxDfWo8xHRh_QriXs1M3a3ImxnIQwHaSG0xS"
            />
          </div>
          <div class="p-6">
            <span class="bg-orange-600 text-white px-2 py-1 font-label-caps text-[10px] inline-block mb-4">ELECTRICAL</span>
            <h3 class="font-h3 text-[18px] leading-tight text-primary mb-2">Data Center Infrastructure</h3>
            <p class="font-body-md text-slate-600 text-xs">High-density electrical routing and power distribution modeling for Tier IV data facility.</p>
          </div>
        </div>
        <!-- Small Card 2 -->
        <div class="group border border-slate-300 bg-white p-1 hover:border-orange-500 transition-colors">
          <div class="p-6 h-full flex flex-col justify-between">
            <div>
              <span class="bg-slate-200 text-slate-900 px-2 py-1 font-label-caps text-[10px] inline-block mb-4">PLUMBING</span>
              <h3 class="font-h3 text-[18px] leading-tight text-primary mb-2">Aquatic Center Systems</h3>
              <p class="font-body-md text-slate-600 text-xs">Specialized filtration and drainage systems for Olympic-grade athletic complexes.</p>
            </div>
            <div class="mt-6 pt-6 border-t border-slate-100">
              <div class="w-full bg-slate-100 h-1 relative overflow-hidden">
                <div class="absolute left-0 top-0 h-full bg-orange-500" style="width: 85%;"></div>
              </div>
              <div class="flex justify-between mt-2 font-mono-data text-[10px] text-slate-400">
                <span>COMPLETION</span>
                <span>85.00%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Callout Project Card -->
        <div class="md:col-span-2 group border border-slate-900 bg-primary p-6 text-on-primary flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-1">
            <span class="font-label-caps text-secondary-container mb-2 block">LATEST_DEVELOPMENT</span>
            <h3 class="font-h2 text-h3 mb-4">Fire Protection Standards Revamp</h3>
            <p class="text-sm opacity-80 mb-6">Implementing new NFPA-compliant automated drawing protocols that reduced drafting revision cycles by 40%.</p>
            <a class="inline-flex items-center gap-2 font-label-caps border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors" href="#">
              DOWNLOAD WHITE PAPER
              <span class="material-symbols-outlined text-sm">description</span>
            </a>
          </div>
          <div class="w-32 h-32 md:w-48 md:h-48 border border-white/20 flex items-center justify-center p-4">
            <span class="material-symbols-outlined text-[64px] text-orange-500">fire_hydrant</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Expertise / Skills -->
    <section class="max-w-6xl mx-auto mb-20 bg-slate-100 border border-slate-300 p-12 relative overflow-hidden">
      <div class="absolute top-0 right-0 p-4 font-mono-data text-[60px] text-slate-200 font-black leading-none select-none">
        02
      </div>
      <h2 class="font-h2 text-h2 text-primary mb-12">Technical Competencies</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 class="font-label-caps text-orange-600 mb-4 border-b border-orange-200 pb-2">SOFTWARE</h4>
          <ul class="font-mono-data text-xs space-y-3 text-slate-700">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>AUTOCAD 2024</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>AUTOCAD MEP</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>TECHNICAL REVIEW</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>DRAFTING STANDARDS</li>
          </ul>
        </div>
        <div>
          <h4 class="font-label-caps text-orange-600 mb-4 border-b border-orange-200 pb-2">PROCESSES</h4>
          <ul class="font-mono-data text-xs space-y-3 text-slate-700">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>TECHNICAL COORDINATION</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>SHOP DRAWING PREP</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>AS-BUILT DRAFTING</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>DRAWING REVIEW</li>
          </ul>
        </div>
        <div>
          <h4 class="font-label-caps text-orange-600 mb-4 border-b border-orange-200 pb-2">COMPLIANCE</h4>
          <ul class="font-mono-data text-xs space-y-3 text-slate-700">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>NFPA STANDARDS</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>ASHRAE GUIDELINES</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>IBC / LOCAL CODES</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-slate-900"></span>GREEN BLDG COMPLIANCE</li>
          </ul>
        </div>
        <div class="bg-white border border-slate-300 p-4 flex flex-col justify-center">
          <span class="font-mono-data text-[10px] text-slate-400">TOTAL EXPERIENCE</span>
          <span class="font-h1 text-[40px] leading-none text-primary font-bold">20+</span>
          <span class="font-label-caps text-slate-600">YEARS ACTIVE</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

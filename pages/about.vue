<script setup>
const colorMode = useColorMode();
</script>

<template>
  <div>
    <div
      class="custom-list-style border p-10 rounded border-l-gray-600 dark:border-gray-200 bg-gray-100 dark:bg-slate-800"
    >
      <div class="flex items-center gap-8">
        <NuxtImg
          src="/img/pas-foto.jpg"
          alt="pas foto"
          class="w-44 h-auto rounded-full object-cover object-top"
        />
        <div class="article">
          <h1 class="text-4xl">Falestio Hanif Al Hakim</h1>
          <p>
            I'm a full-stack developer who enjoys diving into both front-end and
            back-end work. Right now, I'm focused on sharpening my cloud
            computing and backend skills. Always curious and excited to take on
            new challenges while growing along the way!
          </p>
          <div class="flex gap-4 items-center">
            <NuxtLink
              to="https://www.linkedin.com/in/falestio-hanif-al-hakim-ab4610221"
              target="_blank"
            >
              <PhosphorIconLinkedinLogo
                class="text-3xl text-fruit-salad-100 hover:bg-[#0A66C2]"
              ></PhosphorIconLinkedinLogo>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- work experience -->
      <h2 class="text-2xl font-bold my-4">Work Experience</h2>

      <div class="flex justify-between gap-4 mb-4">
        <div class="flex gap-4">
          <NuxtImg class="w-20 h-20" src="/img/dibimbing.png" />
          <div>
            <h3 class="text-xl">Fullstack Engineer</h3>
            <p>dibimbing.id · Intern</p>
            <p>Feb 2024 - Jun 2024 · 5 Months</p>
            <p class="text-sm">Jakarta · OnSite</p>
          </div>
        </div>
        <div class="flex gap-4">
          <NuxtImg src="/img/react.png" class="w-auto h-10" />
          <NuxtImg src="/img/next-js.png" class="w-auto h-10" />
          <NuxtImg src="/img/astro.png" class="w-auto h-10" />
          <NuxtImg src="/img/tailwind.png" class="w-auto h-10" />
          <NuxtImg src="/img/graphql.png" class="w-auto h-10" />
          <NuxtImg src="/img/postgre.png" class="w-auto h-10" />
        </div>
      </div>

      <div class="flex justify-between gap-4">
        <div class="flex gap-4">
          <NuxtImg
            class="w-20 h-20"
            v-if="colorMode.preference == 'light'"
            src="/img/logo-telu-light.png"
          />
          <NuxtImg
            class="w-20 h-20"
            v-if="colorMode.preference == 'dark'"
            src="/img/logo-telu-dark.png"
          />
          <div>
            <h3 class="text-xl">Web Programming Practicum Assistant</h3>
            <p>Telkom University · Part Time</p>
            <p>Sep 2023 - Des 2023 · 4 Months</p>
            <p class="text-sm">Bandung · OnSite</p>
          </div>
        </div>
        <div class="flex gap-4">
          <NuxtImg src="/img/laravel.png" class="w-auto h-10" />
          <NuxtImg src="/img/php.png" class="w-auto h-10" />
        </div>
      </div>

      <!-- project -->
      <h2 class="text-2xl font-bold my-4">Projects</h2>

      <div>
        <div class="flex gap-4 mb-8">
          <NuxtImg class="w-20 h-20" src="/img/pojokoding-favicon.svg" />
          <div>
            <h3 class="text-xl">Pojokoding</h3>
            <p>pojokoding.com</p>
            <p>
              Website belajar pemrograman dengan fitur latihan dalam browser
              seperti codewars dan hackerrank.
            </p>
          </div>
        </div>

        <div class="flex gap-4 ml-12 mb-8">
          <NuxtImg
            class="w-20 h-20"
            src="/img/linux-traefik-grafana-prometheus-idcloudhost.png"
          />
          <div>
            <NuxtLink
              to="/blog/autoscaling-pada-idcloudhost-menggunakan-grafana-traefik"
            >
              <h3 class="text-xl text-fruit-salad-500 hover:underline">
                Implementasi Server Autoscaling Menggunakan IDCloudHost Untuk
                Menjalankan Judge0 (Pengeksekusi Kode)
              </h3>
            </NuxtLink>
            <a href="pojokoding.com" class="text-blue-400 underline"></a>
            <ul>
              <li>Administrasi Virtual Machine menggunakan Linux</li>
              <li>Traefik sebagai API Gateway dan Load Balancer</li>
              <li>Prometheus dan Grafana untuk monitoring dan Alerting</li>
              <li>API IDCloudHost untuk memodifikasi virtual machines</li>
            </ul>
          </div>
        </div>

        <div class="flex gap-4 ml-12 mb-8">
          <NuxtImg class="w-20 h-20" src="/img/nuxt-nuxtui-seo-firebase.png" />
          <div>
            <h3 class="text-xl">
              Pembuatan Aplikasi Utama Menggunakan Nuxt dan Firebase
            </h3>
            <a href="pojokoding.com" class="text-blue-400 underline"></a>
            <ul>
              <li>Menggunakan framework Nuxt</li>
              <li>NuxtUI for UI component</li>
              <li>Firebase sebagai database, hosting, dan analitik</li>
              <li>Teroptimisasi SEO</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- education -->
      <h2 class="text-2xl font-bold my-4">Education</h2>

      <div class="flex">
        <NuxtImg
          class="w-20 h-20"
          v-if="colorMode.preference == 'light'"
          src="/img/logo-telu-light.png"
        />
        <NuxtImg
          class="w-20 h-20"
          v-if="colorMode.preference == 'dark'"
          src="/img/logo-telu-dark.png"
        />
        <div>
          <h3 class="text-xl">Telkom University</h3>
          <p>D3 Infomation System (Sistem Informasi)</p>
          <p class="text-sm">2021 - 2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

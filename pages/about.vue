<script setup>
const colorMode = useColorMode();

useSeoMeta({
  title: "Falestio | About",
  description: "Always curious and excited to take on new challenges while growing along the way!"
})
</script>

<template>
  <div>
    <div
      class="custom-list-style border p-10 rounded border-l-gray-600 dark:border-gray-200 bg-gray-100 dark:bg-slate-800">
      <div class="flex items-center gap-8">
        <NuxtImg src="/img/pas-foto.jpg" alt="pas foto" class="w-44 h-auto rounded-full object-cover object-top" />
        <div class="article">
          <h1 class="text-4xl">Falestio Hanif Al Hakim</h1>
          <p>
            I'm a full-stack developer who enjoys diving into both front-end and
            back-end work. Right now, I'm focused on sharpening my cloud
            computing and backend skills. Always curious and excited to take on
            new challenges while growing along the way!
          </p>
          <div class="flex gap-4 items-center">
            <NuxtLink to="https://www.linkedin.com/in/falestio-hanif-al-hakim-ab4610221" target="_blank">
              <PhosphorIconLinkedinLogo class="text-3xl text-fruit-salad-100 hover:bg-[#0A66C2]">
              </PhosphorIconLinkedinLogo>
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
          <NuxtImg class="w-20 h-20" v-if="colorMode.preference == 'light'" src="/img/logo-telu-light.png" />
          <NuxtImg class="w-20 h-20" v-if="colorMode.preference == 'dark'" src="/img/logo-telu-dark.png" />
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

      <!-- education -->
      <h2 class="text-2xl font-bold my-4">Education</h2>

      <div class="flex">
        <NuxtImg class="w-20 h-20" v-if="colorMode.preference == 'light'" src="/img/logo-telu-light.png" />
        <NuxtImg class="w-20 h-20" v-if="colorMode.preference == 'dark'" src="/img/logo-telu-dark.png" />
        <div>
          <h3 class="text-xl">Telkom University</h3>
          <p>D3 Infomation System (Sistem Informasi)</p>
          <p class="text-sm">2021 - 2024</p>
        </div>
      </div>

      <!-- project -->
      <h2 class="text-2xl font-bold my-4">Projects</h2>

      <div>
        <div class="flex gap-4 mb-8">
          <NuxtImg class="w-60 h-60" src="/img/linux-traefik-grafana-prometheus-idcloudhost.png" />
          <div>
            <h3 class="text-2xl text-fruit-salad-700 hover:underline mb-3">
              Server: Implementasi Autoscaling Manual untuk Server IDCloudHost
            </h3>

            <NuxtLink to="/blog/autoscaling-pada-idcloudhost-menggunakan-grafana-traefik"
              class="inline-block text-fruit-salad-500 hover:text-fruit-salad-700 font-medium hover:underline mb-2">
              <span class="flex items-center gap-1">

                Article
                <PhosphorIconArrowUpRight />
              </span>
            </NuxtLink>

            <p class="text-xl mb-3">
              Mengembangkan fitur autoscalling untuk server pada IDCloudHost.
              Menambahkan virtual machine baru secara otomatis sebagai response trafik yang meningkat.
              Menghapus virtual machine secara otomatis sebagai respon trafik yang menurun.
            </p>
            <ul>
              <li>Administrasi Virtual Machine menggunakan Linux</li>
              <li>Traefik sebagai API Gateway dan Load Balancer</li>
              <li>Prometheus dan Grafana untuk monitoring dan Alerting</li>
              <li>API IDCloudHost untuk memodifikasi virtual machines</li>
            </ul>
          </div>
        </div>

        <div class="flex gap-4 mb-8">
          <NuxtImg class="w-60 h-60" src="/about-img/d3-logo.png" />
          <div>
            <h3 class="text-2xl text-fruit-salad-700 hover:underline mb-3">
              Visualisasi Data: Odoo Module Dependency Graph
            </h3>
            <NuxtLink to="https://github.com/Falestio/odoo-dependency-network" target="_blank"
              class="inline-block text-fruit-salad-500 hover:text-fruit-salad-700 font-medium hover:underline mb-2">
              <span class="flex items-center gap-1">
                Github Repo
                <PhosphorIconArrowUpRight />
              </span>
            </NuxtLink>
            <p class="text-xl mb-3">Aplikasi visualisasi data untuk hubungan dependency antar modul Odoo. Berguna untuk
              memermudah migrasi Odoo ke versi terbaru dan memahami struktur keseluruhan ERP.</p>
            <ul>
              <li>Node Scripts to get module dependency data</li>
              <li>D3.js for visualization</li>
            </ul>
          </div>
        </div>

        <div class="flex gap-4 mb-8">
          <NuxtImg class="w-60 h-60" src="/about-img/pyqt-logo.png" />
          <div>
            <h3 class="text-2xl text-fruit-salad-700 mb-3">
              Aplikasi Desktop: Input Data Inspeksi Kain Terintegrasi Odoo ERP
            </h3>

            <NuxtLink to="https://drive.google.com/file/d/1ZCmEYt9rGg7JHlrvZdH3EODVxSq8WA7T/view?usp=sharing"
              target="_blank"
              class="inline-block text-fruit-salad-500 hover:text-fruit-salad-700 font-medium hover:underline mb-2">
              <span class="flex items-center gap-1">
                Dokumentasi
                <PhosphorIconArrowUpRight />
              </span>
            </NuxtLink>

            <p class="text-xl mb-3">Aplikasi ini dipasang di salah satu pabrik tekstil di Bandung. Bertujuan mempermudah
              proses input data inspeksi kain sebelum keluar pabrik untuk dijual. Data yang diinput adalah jumlah kain,
              daftar cacat kain, dan detail cacat kain. Setelah Kain selesai di inspeksi langkah akhir adalah melakukan
              print barcode yang berisikan informasi terkait kain tersebut.</p>
            <ul>
              <li>PyQT6 (Python)</li>
              <li>Odoo External API (XML-RPC)</li>
            </ul>
          </div>
        </div>

        <div class="flex gap-4 mb-8">
          <NuxtImg class="w-60 h-60" src="/about-img/odoo.png" />
          <div>
            <h3 class="text-2xl text-fruit-salad-700 mb-3">
              Modul Odoo: Data Hari Libur Nasional Indonesia
            </h3>

            <NuxtLink to="https://apps.odoo.com/apps/modules/18.0/get_indonesian_public_holiday_data" target="_blank"
              class="inline-block text-fruit-salad-500 hover:text-fruit-salad-700 font-medium hover:underline mb-2">
              <span class="flex items-center gap-1">
                Odoo Store
                <PhosphorIconArrowUpRight />
              </span>
            </NuxtLink>

            <p class="text-xl mb-3">Modul ini menambahkan tombol untuk mengambil data hari libur nasional indonesia.</p>
            <ul>
              <li>Odoo 18</li>
              <li>Integrasi sumber data external ke Odoo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

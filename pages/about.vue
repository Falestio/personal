<script setup>
const colorMode = useColorMode();

useSeoMeta({
  title: "Falestio | About",
  description: "Always curious and excited to take on new challenges while growing along the way!"
})

const pageToc = useState("pageToc", () => null);

pageToc.value = {
  links: [
    { id: "work-experience", text: "Work Experience", children: [
      { id: "exp-wibicon", text: "PT Wibicon Karya Indonesia" },
      { id: "exp-dibimbing", text: "dibimbing.id" },
    ] },
    { id: "education", text: "Education", children: [
      { id: "edu-binus", text: "Binus University" },
      { id: "edu-telkom", text: "Telkom University" },
    ] },
    { id: "projects", text: "Projects", children: [
      { id: "proyek-sierra", text: "Proyek Odoo Sierra", children: [
        { id: "sierra-sales-flutter", text: "Sales: Odoo x Flutter Sales App" },
        { id: "sierra-sales-dashboard", text: "Sales: Dashboarding" },
        { id: "sierra-ekspedisi", text: "Ekspedisi: Surat Perintah Muat" },
        { id: "sierra-produksi", text: "Produksi: Revamp Input dan Dashboarding" },
        { id: "sierra-teknik", text: "Teknik: Maintenance & Downtime" },
        { id: "sierra-purchasing", text: "Purchasing: Approval Dinamis" },
        { id: "sierra-finance", text: "Finance" },
        { id: "sierra-akunting", text: "Akunting" },
      ] },
      { id: "proyek-bapelkes", text: "Proyek Odoo Bapelkes Krakatau Steel", children: [
        { id: "bapelkes-eoffice", text: "E-Office dan Covenant" },
        { id: "bapelkes-risk", text: "Risk Management" },
      ] },
      { id: "proyek-lain", text: "Proyek Lain", children: [
        { id: "lain-seafile", text: "Third Party Image Storage (Seafile)" },
        { id: "lain-daterange", text: "Search by Date Range di List View" },
        { id: "lain-hariliburi", text: "Fetch Data Hari Libur Nasional Indonesia" },
        { id: "lain-exportexcel", text: "Export List View to Excel" },
        { id: "lain-opensource", text: "Kontribusi Open Source (non Odoo)" },
        { id: "lain-autoscaling", text: "Server: Autoscaling IDCloudHost" },
        { id: "lain-d3", text: "Visualisasi Data: Odoo Module Dependency Graph" },
        { id: "lain-pyqt", text: "Aplikasi Desktop: Input Data Inspeksi Kain" },
      ] },
    ] },
  ],
};

onBeforeUnmount(() => {
  pageToc.value = null;
});
</script>

<template>
  <div>
    <div
      class="custom-list-style border p-10 rounded border-l-gray-600 dark:border-gray-200 bg-gray-100 dark:bg-slate-800">
      <div class="flex items-center gap-8">
        <NuxtImg src="/img/pas-foto.jpeg" alt="pas foto" class="w-44 h-44 rounded-full object-cover object-top" />
        <div class="article">
          <h1 class="text-4xl">Falestio Hanif Al Hakim</h1>
          <h4 class="text">Odoo Developer</h4>
          <div class="flex gap-4 items-center">
            <NuxtLink to="https://www.linkedin.com/in/falestio-hanif-al-hakim-ab4610221" target="_blank">
              <PhosphorIconLinkedinLogo class="text-3xl text-fruit-salad-100 hover:bg-[#0A66C2]">
              </PhosphorIconLinkedinLogo>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- work experience -->
      <h2 id="work-experience" class="text-2xl font-bold my-4">Work Experience</h2>

      <div class="flex gap-4 mb-4">
        <NuxtImg class="w-20 h-16" src="/img/wibicon-logo.png" />
        <div class="flex flex-col gap-4">
          <div>
            <h2 id="exp-wibicon" class="text-xl">PT Wibicon Karya Indonesia</h2>
            <h3 class="text-lg">Odoo Developer - Remote</h3>
            <p>Feb 2026 - Jan 2027 (1 tahun)</p>
          </div>
          <div>
            <h3 class="text-lg">Odoo Developer</h3>
            <p>Jan 2025 - Jan 2026 (1 tahun)</p>
          </div>
        </div>
      </div>

      <div class="flex justify-between gap-4 mb-4">
        <div class="flex gap-4">
          <NuxtImg class="w-20 h-20" src="/img/dibimbing.png" />
          <div>
            <h2 id="exp-dibimbing" class="text-xl">dibimbing.id</h2>
            <h3 class="text-lg">Fullstack Engineer Intern</h3>
            <p>Feb 2024 - Jun 2024 · 5 Months</p>
            <p class="text-sm">Jakarta · OnSite</p>
          </div>
        </div>
      </div>

      <!-- education -->
      <h2 id="education" class="text-2xl font-bold my-4">Education</h2>
      
      <div class="flex gap-4 mb-4">
        <NuxtImg class="w-20 h-18" v-if="colorMode.preference == 'light'" src="/img/logo-binus.png" />
        <NuxtImg class="w-20 h-20" v-if="colorMode.preference == 'dark'" src="/img/logo-binus-dark.png" />
        <div>
          <h3 id="edu-binus" class="text-xl">Binus University</h3>
          <p>S1 Infomation System (Sistem Informasi)</p>
          <p class="text-sm">2025 - Sekarang</p>
        </div>
      </div>
      
      <div class="flex gap-4">
        <NuxtImg class="w-20 h-20" v-if="colorMode.preference == 'light'" src="/img/logo-telu-light.png" />
        <NuxtImg class="w-20 h-20" v-if="colorMode.preference == 'dark'" src="/img/logo-telu-dark.png" />
        <div>
          <h3 id="edu-telkom" class="text-xl">Telkom University</h3>
          <p>D3 Infomation System (Sistem Informasi)</p>
          <p class="text-sm">2021 - 2024</p>
        </div>
      </div>

      <h2 id="portfolio" class="text-2xl font-bold my-4">Portfolio</h2>
      
      <div>
        <!-- Sierra -->
        <div id="proyek-sierra" class="mb-10">
          <h3 class="text-2xl text-fruit-salad-300 mb-3">Proyek Odoo Pabrik Air Minum Dalam Kemasan Sierra</h3>

          <ImageGallery
            :images="[
              { src: '/about-img/sierra-ekspedisi.jpeg', caption: 'Ekspedisi' },
              { src: '/about-img/sierra-hr1.png', caption: 'HR' },
              { src: '/about-img/sierra-hr2.png', caption: 'HR' },
              { src: '/about-img/sierra-qc.jpeg', caption: 'QC' },
              { src: '/about-img/sierra-teknik.jpeg', caption: 'Teknik' },
            ]"
          />

          <p class="text-xl mb-4">
            Proyek untuk upgrade Odoo 10 ke Odoo 18, melibatkan konversi kode Odoo 10 ke Odoo 18, migrasi data, dan
            peningkatan serta penambahan fitur. Modul-modul yang dikembangkan melibatkan seluruh departemen pabrik.
          </p>

          <ProjectSection
            :images="[
              '/about-img/sales1.png',
              '/about-img/sales2.png',
              '/about-img/sales3.png',
              '/about-img/sales4.png',
              '/about-img/sales5.png',
              '/about-img/sales6.png',
              '/about-img/sales7.png',
            ]"
            imageAlt="Sales: Odoo x Flutter Sales App"
          >
            <h4 id="sierra-sales-flutter" class="text-xl font-semibold mb-1">Sales: Odoo x Flutter Sales App</h4>
            <p class="mb-2">Aplikasi mobile menggunakan Flutter yang terintegrasi dengan Odoo untuk memenuhi kebutuhan
              sales yaitu:</p>
            <ul class="mb-2">
              <li>Input pesanan baru</li>
              <li>Input pelanggan baru</li>
              <li>Check in dan check out saat kunjungan (ada fitur foto dan koordinat)</li>
              <li>Melakukan penagihan</li>
            </ul>
            <p>Integrasi dengan Odoo dilakukan dengan membuat modul khusus yang berisikan semua endpoint yang dibutuhkan
              mobile dalam bentuk controller, sedangkan aplikasi Flutter cukup memanggil endpoint tersebut.</p>
          </ProjectSection>

          <ProjectSection
            :images="[
              { src: '/about-img/dash_sales1.png', caption: 'Dashboard Sales' },
              { src: '/about-img/dash_sales2.png', caption: 'Dashboard Sales' },
              { src: '/about-img/dash_sales3.png', caption: 'Dashboard Sales' },
              { src: '/about-img/dash_sales4.png', caption: 'Dashboard Sales' },
              { src: '/about-img/dash_sales5.png', caption: 'Dashboard Sales' },
              { src: '/about-img/dash_piutang1.png', caption: 'Dashboard Piutang' },
              { src: '/about-img/dash_piutang2.png', caption: 'Dashboard Piutang' },
              { src: '/about-img/dash_piutang3.png', caption: 'Dashboard Piutang' },
            ]"
            imageAlt="Sales: Dashboarding"
          >
            <h4 id="sierra-sales-dashboard" class="text-xl font-semibold mb-1">Sales: Dashboarding</h4>
            <p class="mb-2">Pembuatan beberapa dashboard terkait penjualan</p>
            <ul>
              <li>Dashboard Sales</li>
              <li>Dashboard Piutang</li>
            </ul>
          </ProjectSection>

          <ProjectSection
            :images="[
              { src: '/about-img/dashspm1.png', caption: 'Surat Perintah Muat' },
              { src: '/about-img/dashspm2.png', caption: 'Surat Perintah Muat' },
              { src: '/about-img/dashspm3.png', caption: 'Surat Perintah Muat' },
              { src: '/about-img/dashspm4_print.png', caption: 'Print Surat Perintah Muat' },
              { src: '/about-img/dashspm5.png', caption: 'Surat Perintah Muat' },
              { src: '/about-img/dashdist1.png', caption: 'Dashboard Distribusi' },
              { src: '/about-img/dashdist2.png', caption: 'Dashboard Distribusi' },
            ]"
            imageAlt="Ekspedisi: Surat Perintah Muat dan Dashboarding"
          >
            <h4 id="sierra-ekspedisi" class="text-xl font-semibold mb-1">Ekspedisi: Surat Perintah Muat dan Dashboarding</h4>
            <p class="mb-2">Penambahan alur surat perintah muat diantara proses pembuatan DO dari SO dan menampilkan
              data DO pada dashboard distribusi</p>
            <p class="italic">Sales Order → Surat Perintah Muat → Delivery Order → Dashboard Distribusi</p>
          </ProjectSection>

          <ProjectSection :images="['/about-img/odoo.png']" imageAlt="Produksi: Revamp Input dan Dashboarding">
            <h4 id="sierra-produksi" class="text-xl font-semibold mb-1">Produksi: Revamp Input dan Dashboarding</h4>
            <ul>
              <li>Production Planning</li>
              <li>Penambahan input informasi OEE</li>
              <li>Input QC</li>
              <li>Scrap</li>
              <li>Dashboard Harian</li>
              <li>Dashboard Bulanan</li>
            </ul>
          </ProjectSection>

          <ProjectSection :images="['/about-img/odoo.png']" imageAlt="Teknik: Maintenance Request dan Production Downtime">
            <h4 id="sierra-teknik" class="text-xl font-semibold mb-1">Teknik: Maintenance Request dan Production Downtime</h4>
            <ul>
              <li>Maintenance Request</li>
              <li>Maintenance Dashboard</li>
              <li>Downtime Dashboard</li>
            </ul>
          </ProjectSection>

          <ProjectSection :images="['/about-img/odoo.png']" imageAlt="Purchasing: Approval Dinamis">
            <h4 id="sierra-purchasing" class="text-xl font-semibold mb-1">Purchasing: Approval Dinamis</h4>
            <p>Sebelum purchase order dapat di-confirm harus melalui tahapan approval dulu, dan urutan approval dapat
              diedit serta dapat menggunakan beberapa kondisi.</p>
          </ProjectSection>

          <ProjectSection :images="['/about-img/odoo.png']" imageAlt="Finance">
            <h4 id="sierra-finance" class="text-xl font-semibold mb-1">Finance</h4>
            <ul>
              <li>Laporan cashflow forecast</li>
            </ul>
          </ProjectSection>

          <ProjectSection :images="['/about-img/odoo.png']" imageAlt="Akunting">
            <h4 id="sierra-akunting" class="text-xl font-semibold mb-1">Akunting</h4>
            <ul>
              <li>Laporan cashflow statement</li>
              <li>Asset management</li>
            </ul>
          </ProjectSection>
        </div>

        <!-- Bapelkes Krakatau Steel -->
        <div id="proyek-bapelkes" class="mb-10">
          <h3 class="text-2xl text-fruit-salad-300 mb-3">Proyek Odoo Bapelkes Krakatau Steel - Modul Office</h3>

          <p class="text-xl mb-4">
            Ikut serta dalam proyek ERP untuk Bapelkes Krakatau Steel. Saya mendapat bagian mengerjakan modul
            E-Office, Covenant, dan Risk Management.
          </p>

          <ProjectSection :images="['/about-img/odoo.png']" imageAlt="E-Office dan Covenant">
            <h4 id="bapelkes-eoffice" class="text-xl font-semibold mb-1">E-Office dan Covenant</h4>
            <ul>
              <li>Input permohonan dokumen perizinan, akta, kontrak, legal opinion, SK</li>
              <li>Pengelolaan permohonan dokumen perizinan, akta, kontrak</li>
              <li>Monitoring masa berlaku dan arsip dokumen perjanjian, kontrak, perizinan</li>
              <li>Disposisi surat masuk dan keluar</li>
              <li>Pengelolaan rapat dan notulensi</li>
              <li>Pengelolaan kegiatan pengurus</li>
            </ul>
          </ProjectSection>

          <ProjectSection :images="['/about-img/odoo.png']" imageAlt="Risk Management">
            <h4 id="bapelkes-risk" class="text-xl font-semibold mb-1">Risk Management</h4>
            <ul>
              <li>Risk Assessment</li>
              <li>Risk Kontrol</li>
              <li>Rekapitulasi Risk</li>
            </ul>
          </ProjectSection>
        </div>

        <!-- Proyek Lain -->
        <div id="proyek-lain">
          <h3 class="text-2xl text-fruit-salad-300 mb-3">Proyek Lain</h3>

          <ProjectSection :images="['/about-img/odoo.png']" imageAlt="Third Party Image Storage (Seafile)">
            <h4 id="lain-seafile" class="text-xl font-semibold mb-1">Third Party Image Storage (Seafile)</h4>
            <p class="mb-2">Memungkinkan penyimpanan gambar ke storage external, meliputi gambar yang diupload dari</p>
            <ul>
              <li>Attachment di chatter</li>
              <li>Attachment di field HTML</li>
              <li>Widget khusus untuk membuat field gambar external</li>
            </ul>
          </ProjectSection>

          <ProjectSection :images="['/about-img/odoo.png']" imageAlt="Search by Date Range di List View">
            <h4 id="lain-daterange" class="text-xl font-semibold mb-1">Search by Date Range di List View</h4>
            <p>Memungkinkan melakukan filter range tanggal di list view melalui UI yang simpel</p>
          </ProjectSection>

          <ProjectSection :images="['/about-img/odoo.png']" imageAlt="Fetch Data Hari Libur Nasional Indonesia">
            <h4 id="lain-hariliburi" class="text-xl font-semibold mb-1">
              Fetch Data Hari Libur Nasional Indonesia
            </h4>

            <NuxtLink to="https://apps.odoo.com/apps/modules/18.0/get_indonesian_public_holiday_data" target="_blank"
              class="inline-block text-fruit-salad-300 hover:text-fruit-salad-700 font-medium hover:underline mb-2">
              <span class="flex items-center gap-1">
                Odoo Store
                <PhosphorIconArrowUpRight />
              </span>
            </NuxtLink>

            <p class="mb-2">Mengambil data hari libur nasional Indonesia untuk kalender Odoo menggunakan API hari
              libur external.</p>
            <ul>
              <li>Odoo 18</li>
              <li>Integrasi sumber data external ke Odoo</li>
            </ul>
          </ProjectSection>

          <ProjectSection
            :images="['/about-img/listtoexcel1.png', '/about-img/listtoexcel2.png']"
            imageAlt="Export List View to Excel"
          >
            <h4 id="lain-exportexcel" class="text-xl font-semibold mb-1">Export List View to Excel</h4>
            <p>Export data yang muncul di list view sekarang ke Excel</p>
          </ProjectSection>

          <ProjectSection :images="['/about-img/odoo.png']" imageAlt="Kontribusi Open Source (non Odoo)">
            <h4 id="lain-opensource" class="text-xl font-semibold mb-1">Kontribusi Open Source (non Odoo)</h4>
            <p class="italic">Belum ada</p>
          </ProjectSection>

          <ProjectSection :images="['/img/linux-traefik-grafana-prometheus-idcloudhost.png']"
            imageAlt="Server: Implementasi Autoscaling Manual untuk Server IDCloudHost">
            <h4 id="lain-autoscaling" class="text-xl font-semibold mb-1">
              Server: Implementasi Autoscaling Manual untuk Server IDCloudHost
            </h4>

            <NuxtLink to="/blog/autoscaling-pada-idcloudhost-menggunakan-grafana-traefik"
              class="inline-block text-fruit-salad-300 hover:text-fruit-salad-700 font-medium hover:underline mb-2">
              <span class="flex items-center gap-1">
                Article
                <PhosphorIconArrowUpRight />
              </span>
            </NuxtLink>

            <p class="mb-2">
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
          </ProjectSection>

          <ProjectSection :images="['/about-img/d3-logo.png']" imageAlt="Visualisasi Data: Odoo Module Dependency Graph">
            <h4 id="lain-d3" class="text-xl font-semibold mb-1">
              Visualisasi Data: Odoo Module Dependency Graph
            </h4>
            <NuxtLink to="https://github.com/Falestio/odoo-dependency-network" target="_blank"
              class="inline-block text-fruit-salad-300 hover:text-fruit-salad-700 font-medium hover:underline mb-2">
              <span class="flex items-center gap-1">
                Github Repo
                <PhosphorIconArrowUpRight />
              </span>
            </NuxtLink>
            <p class="mb-2">Aplikasi visualisasi data untuk hubungan dependency antar modul Odoo. Berguna untuk
              memermudah migrasi Odoo ke versi terbaru dan memahami struktur keseluruhan ERP.</p>
            <ul>
              <li>Node Scripts to get module dependency data</li>
              <li>D3.js for visualization</li>
            </ul>
          </ProjectSection>

          <ProjectSection :images="['/about-img/pyqt-logo.png']"
            imageAlt="Aplikasi Desktop: Input Data Inspeksi Kain Terintegrasi Odoo ERP">
            <h4 id="lain-pyqt" class="text-xl font-semibold mb-1">
              Aplikasi Desktop: Input Data Inspeksi Kain Terintegrasi Odoo ERP
            </h4>

            <NuxtLink to="https://drive.google.com/file/d/1ZCmEYt9rGg7JHlrvZdH3EODVxSq8WA7T/view?usp=sharing"
              target="_blank"
              class="inline-block text-fruit-salad-300 hover:text-fruit-salad-700 font-medium hover:underline mb-2">
              <span class="flex items-center gap-1">
                Dokumentasi
                <PhosphorIconArrowUpRight />
              </span>
            </NuxtLink>

            <p class="mb-2">Aplikasi ini dipasang di salah satu pabrik tekstil di Bandung. Bertujuan mempermudah
              proses input data inspeksi kain sebelum keluar pabrik untuk dijual. Data yang diinput adalah jumlah kain,
              daftar cacat kain, dan detail cacat kain. Setelah kain selesai diinspeksi langkah akhir adalah melakukan
              print barcode yang berisikan informasi terkait kain tersebut.</p>
            <ul>
              <li>PyQT6 (Python)</li>
              <li>Odoo External API (XML-RPC)</li>
            </ul>
          </ProjectSection>
        </div>
      </div>
    </div>
  </div>
</template>

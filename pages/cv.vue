<script setup>
definePageMeta({ layout: "blank" });

useSeoMeta({
  title: "Falestio | CV",
  description: "Ringkasan CV Falestio Hanif Al Hakim - Odoo Developer",
});

function printCv() {
  window.print();
}
</script>

<template>
  <div class="cv-screen">
    <div class="no-print flex justify-center gap-3 py-4">
      <button
        type="button"
        @click="printCv"
        class="px-4 py-2 rounded bg-fruit-salad-500 text-white font-medium hover:bg-fruit-salad-700"
      >
        Print / Save as PDF
      </button>
      <NuxtLink to="/about" class="text-gray-800 px-4 py-2 rounded border border-gray-400 font-medium hover:bg-gray-100">
        Back to About
      </NuxtLink>
    </div>

    <div class="cv-page">
      <!-- Header -->
      <div class="cv-header">
        <div>
          <h1 class="cv-name">Falestio Hanif Al Hakim</h1>
          <p class="cv-title">Odoo Developer</p>
        </div>
        <div class="cv-contact">
          <div>falestiowork@gmail.com</div>
          <div>linkedin.com/in/falestio-hanif-al-hakim-ab4610221</div>
          <div>Bandung, Jawa Barat, Indonesia</div>
        </div>
      </div>

      <div class="cv-columns">
        <!-- Left column -->
        <div class="cv-col-left">
          <section class="cv-section">
            <h2>Work Experience</h2>
            <div class="cv-entry">
              <div class="cv-entry-title">PT Wibicon Karya Indonesia</div>
              <div class="cv-entry-sub">Odoo Developer (Remote)</div>
              <div class="cv-entry-sub">Feb 2026 - Sekarang (1 Tahun)</div>
              <div class="cv-entry-sub" style="margin-top: 4px">Odoo Developer (Kontrak)</div>
              <div class="cv-entry-sub">Jan 2025 - Jan 2026 (1 Tahun)</div>
            </div>
            <div class="cv-entry">
              <div class="cv-entry-title">dibimbing.id</div>
              <div class="cv-entry-sub">Fullstack Engineer Intern</div>
              <div class="cv-entry-sub">Feb 2024 - Jun 2024 (5 Bulan)</div>
            </div>
          </section>

          <section class="cv-section">
            <h2>Education</h2>
            <div class="cv-entry">
              <div class="cv-entry-title">Binus University</div>
              <div class="cv-entry-sub">S1 Sistem Informasi</div>
              <div class="cv-entry-sub">2025 - Sekarang</div>
            </div>
            <div class="cv-entry">
              <div class="cv-entry-title">Telkom University</div>
              <div class="cv-entry-sub">D3 Sistem Informasi</div>
              <div class="cv-entry-sub">2021 - 2024</div>
            </div>
          </section>

          <section class="cv-section">
            <h2>Open Source</h2>
            <div class="cv-entry">
              <div class="cv-entry-title">nitrojs/nitro</div>
              <div class="cv-entry-sub">
                Memperbaiki bug auto-generated Cloudflare worker name yang tidak lowercase (issue #3488, PR #3490
                merged)
              </div>
            </div>
          </section>
        </div>

        <!-- Right column -->
        <div class="cv-col-right">
          <section class="cv-section">
            <h2>Projects</h2>

            <div class="cv-proj-group">
              <div class="cv-proj-group-title">
                Pabrik Air Minum Dalam Kemasan (Sierra)
              </div>
              <ul class="cv-list">
                <li><strong>Sales:</strong> Aplikasi mobile Flutter untuk kunjungan sales, input order, penagihan</li>
                <li><strong>Sales Dashboard:</strong> Informasi penjualan</li>
                <li><strong>Ekspedisi:</strong> Alur Surat Perintah Muat antara SO dan DO, dashboard distribusi</li>
                <li><strong>Production Planning:</strong> Modul perencanaan dan penjadwalan produksi sebelum MO</li>
                <li><strong>OEE Dashboard:</strong> Input parameter OEE dan Laporan produksi harian/bulanan</li>
                <li><strong>Teknik:</strong> Maintenance request dan production downtime dashboard</li>
                <li><strong>Purchasing:</strong> Approval PO dinamis multi-level</li>
                <li><strong>Finance:</strong> Dashboard cashflow forecast</li>
                <li><strong>Akunting:</strong> Laporan cashflow statement dan asset management</li>
              </ul>
            </div>

            <div class="cv-proj-group">
              <div class="cv-proj-group-title">Bapelkes Krakatau Steel</div>
              <ul class="cv-list">
                <li><strong>E-Office &amp; Covenant:</strong> Manajemen dokumen perizinan, kontrak, dan disposisi surat</li>
                <li><strong>Risk Management:</strong> Risk assessment, kontrol, dan rekapitulasi risiko</li>
              </ul>
            </div>

            <div class="cv-proj-group">
              <div class="cv-proj-group-title">Publikasi Modul di Odoo Store</div>
              <ul class="cv-list">
                <li><strong>Filter By Date Range:</strong> Filter list view berdasarkan rentang tanggal</li>
                <li><strong>Indonesian Public Holiday Data:</strong> Data hari libur nasional otomatis</li>
                <li><strong>Export Current List View:</strong> Export list view ke Excel</li>
              </ul>
            </div>

            <div class="cv-proj-group">
              <div class="cv-proj-group-title">Proyek Lain</div>
              <ul class="cv-list">
                <li><strong>Aplikasi Desktop Inspeksi Kain:</strong> Aplikasi PyQt6 terintegrasi Odoo (XML-RPC) untuk pabrik tekstil</li>
                <li><strong>Third Party Image Storage (Seafile):</strong> Integrasi storage gambar eksternal untuk attachment Odoo</li>
                <li><strong>Autoscaling Server (IDCloudHost):</strong> Autoscaling manual VM dengan Linux, Traefik, Grafana, Prometheus</li>
                <li><strong>Odoo Module Dependency Graph:</strong> Visualisasi dependency antar modul Odoo dengan D3.js</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cv-screen {
  min-height: 100vh;
  background: #e5e7eb;
}

.cv-page {
  width: 210mm;
  min-height: 297mm;
  height: 297mm;
  margin: 0 auto 2rem;
  padding: 16mm;
  background: white;
  color: #1a1a1a;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13.5px;
  line-height: 1.5;
}

.cv-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 3px solid #689a60;
  padding-bottom: 10px;
  margin-bottom: 18px;
}

.cv-name {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
}

.cv-title {
  font-size: 17px;
  color: #4c7445;
  margin: 4px 0 0;
}

.cv-contact {
  text-align: right;
  font-size: 12.5px;
  color: #333;
}

.cv-columns {
  display: flex;
  gap: 12mm;
}

.cv-col-left {
  width: 34%;
}

.cv-col-right {
  width: 66%;
}

.cv-section {
  margin-bottom: 18px;
}

.cv-section h2 {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #4c7445;
  border-bottom: 1px solid #d2e3cf;
  padding-bottom: 4px;
  margin: 0 0 9px;
}

.cv-entry {
  margin-bottom: 12px;
}

.cv-entry-title {
  font-weight: 700;
}

.cv-entry-sub {
  color: #444;
}

.cv-skills {
  margin: 0;
}

.cv-proj-group {
  margin-bottom: 13px;
}

.cv-proj-group-title {
  font-weight: 700;
  font-size: 14px;
  color: #354a31;
  margin-bottom: 5px;
}

.cv-list {
  margin: 0;
  padding-left: 16px;
}

.cv-list li {
  margin-bottom: 4px;
  text-align: justify;
  text-justify: inter-word;
}

@media print {
  @page {
    size: A4;
    margin: 0;
  }

  .no-print {
    display: none;
  }

  .cv-screen {
    background: white;
  }

  .cv-page {
    box-shadow: none;
    margin: 0;
    width: 210mm;
    height: 297mm;
  }
}
</style>

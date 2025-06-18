import { Link } from 'react-router';

const AboutPage = () => {
  return (
    <div className="about">
      <h1 className="about_title">About</h1>

      <div class="cerita">
        <b class="p1">CV. Griya Paving Mandiri</b>
        <p>
          Kami adalah perusahaan yg bergerak pada bidang pembuatan salah satu komponen bahan bangunan untuk <em>Outdoor</em>, spesialis pada pembuatan <em>Paving Conblock</em> yg berdiri pada tahun <em>2015</em>. Kami aktif produksi mulai
          tahun <em>2016</em>. Selain menyediakan paving, kami juga melayani jasa <em>Pemasangan Paving</em> sekaligus <em>Free Konsultasi</em>. Untuk saat ini, kami masih senantiasa melayani kebutuhan pengiriman area <em>DIY</em> dan
          <em> Jawa Tengah</em>. Kedepannya, besar kemungkinan akan menjangkau wilayah diluar dari yg sudah kami sebutkan. Mempunyai <em>Visi</em> menjadi perusahaan yg berbasis Syariah guna mencapai <em>Misi</em> untuk membantu menciptakan
          kemakmuran, penuh keberlimpahan, serta mempunyai tujuan utama untuk melayani mitra bisnis dan pelanggan dengan sepenuh hati.
        </p>

        <h3>Visi</h3>

        <span className="visi">
          Menjadi yang terdepan dalam industri dan suplai bahan bangunan yang berbasis Syariah di Indonesia
        </span>

        <h3>Misi</h3>
        <ul>
          <p>Membangun skema niaga modern berbasis syariah.</p>
          <p>Memenuhi kebutuhan produk dan layanan yang terbaik, berkualitas, bernilai tambah serta inovatif demi mencapai kepuasan mitra bisnis dan pelanggan.</p>
          <p>Meningkatkan kompetensi dan sikap mulia sebagai landasan pengembangan sistem dan teknologi niaga terdepan untuk kemajuan bersama.</p>
          <p>Membantu menciptakan kemakmuran dan keberlimpahan penuh keberkahan.</p>
        </ul>
      </div>

      <div className="logo_wrapper">
        <img className="logo" src={require(`../gpm/gpm2.png`)} />
      </div>
    </div>
  );
};

export default AboutPage;

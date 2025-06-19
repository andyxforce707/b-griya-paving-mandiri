import { Link } from 'react-router';
import {motion} from 'framer-motion';

const HomePage = () => {
  return (
    <>
      <div className="home">
        <motion.div className="home_left" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
          <h3>CV. GRIYA PAVING MANDIRI</h3>
          <span>PRODUSEN PAVING BLOCK | SPESIALIS PEMASANGAN | KONSULTASI</span>
          <i>"Think Less, Build More!"</i>
          <a className="contact_us" target="_blank" href="https://wa.me/6288294400642?text=Hai, boleh bagi info lebih lanjut mengenai pavingnya ? _Saya : , Kota :_ ">
            <span>Contact Us</span>
          </a>
        </motion.div>
        <div className="home_right">
          <motion.img src={require(`../gpm/gpm2.png`)} className="logo" alt="" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.75}}/>
        </div>
      </div>

      <div className="opening">
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}}>
          <span>CV. Griya Paving Mandiri</span> adalah perusahaan pembuatan paving block, kansteen, dan bataco yang berdiri sejak 2016. Alhamdulillah telah banyak kontraktor pemerintahan dan swasta yang bekerjasama dengan kami untuk memenuhi kebutuhan proyek mereka. Kami senantiasa berikhtiar mengedepankan kualitas produk dan ketepatan waktu dalam pengiriman.
        </motion.p>
      </div>

      <div className="spesial">
        <motion.div className="spesial_card" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
          <img src={require(`../icons/icon-earth.png`)} className="icon" alt="" />
          <b>Pengiriman</b>
          <small>Cepat sampai, aman dan terkendali!</small>
        </motion.div>
        <motion.div className="spesial_card" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.35}}>
          <img src={require(`../icons/icon-chart.png`)} className="icon chart" alt="" />
          <b>Harga</b>
          <small>GPM menyediakan produk paving dengan harga yang terjangkau.</small>
        </motion.div>
        <motion.div className="spesial_card" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
          <img src={require(`../icons/icon-help.png`)} className="icon" alt="" />
          <b>Pelayanan</b>
          <small>Sepenuh hati, ramah dan bersahabat!</small>
        </motion.div>
      </div>


      <footer className="footer">
        <div>
          <a target="_blank" href="https://maps.app.goo.gl/daLxFLUR7EiC3C2T6" className="location">
            <img src={require(`../icons/icon-location.png`)} class="icon icon_location" />
            <h4>CV. GRIYA PAVING MANDIRI</h4>
          </a>
          <div>
            <small>Jl. Industri No.1, Dusun Kutu, Telukan, Kec. Grogol, Kabupaten Sukoharjo, Jawa Tengah 57552</small>
          </div>
        </div>

        <div className="text">
          <p>Terhubung dengan kami : </p>
          <div className="sosmed">
            <a target="_blank" href="https://facebook.com/">
              <img src={require(`../icons/icon-facebook2.png`)} className="icon facebook" />
            </a>
            <a target="_blank" href="https://wa.me/6288294400642?text=Hai, boleh bagi info lebih lanjut mengenai pavingnya ? _Saya : , Kota :_">
              <img src={require(`../icons/icon-email.png`)} className="icon wa" />
            </a>
            <a target="_blank" href="https://youtube.com/">
              <img src={require(`../icons/icon-youtube-white2.png`)} className="icon youtube" />
            </a>
            <a target="_blank" href="https://instagram.com/griyapaving_solo/?hl=id">
              <img src={require(`../icons/icon-instagram.png`)} className="icon instagram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;

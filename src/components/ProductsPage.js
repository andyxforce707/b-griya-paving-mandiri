import { Link } from 'react-router';
import {useState,useMemo} from 'react';
// ambil const products dari path terkait
import { products } from '../products/products';

//framer-motion 
import {motion} from 'framer-motion';


const ProductsPage = () => {
  const [search,setSearch] = useState('');

  const filteredData = useMemo(()=>{
    const s = search.trim().toLowerCase();
    // jika kolom pencariannya kosong, maka tampilkan semua data
    if(!s) return products;

    // jika kolom pencarian nya tidak kosong, tampilkan data yg isi nya mirip 
    return products.filter((item)=>item.nama.toLowerCase().includes(s));
  },[search,products])
  //
  return (
    <>
      <h2 className="product_title">Products</h2>

      <div className="search_section">
        <input className="search"
          type="text"
          placeholder="Cari Produk..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className={`products ${filteredData.length == 0 ? 'no' : null}` }>
        {/* kondisional rendering, jika data kosong, tampilkan pesan tidak ada data! */}
        {filteredData.length == 0 ? <h3 className="no_data">Produk tidak ditemukan!</h3> : filteredData.map((val) => (
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className="product" key={val.id}>
            <img className="gambar_product" src={require(`../product_images/${val.gambar}`)} alt="" />
            <p>{val.nama.toLocaleUpperCase()}</p>
            <small style={{display:'none'}}>Rp. {val.harga.toLocaleString()},-</small>
            <div className="buttons">
              <Link to={`/product/${val.id}`} className="detail">
                Detail
              </Link>
            </div>
          </motion.div>
        ))}













        {/* {filteredData.map((val) => (
          <div className="product" key={val.id}>
            <img className="gambar_product" src={require(`../product_images/${val.gambar}`)} alt="" />
            <p>{val.nama}</p>
            <small>Rp. {val.harga.toLocaleString()},-</small>
            <div className="buttons">
              <Link to={`/product/${val.id}`} className="detail">
                Detail
              </Link>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default ProductsPage;

// Import method dari 'react-router'
import { useParams, Link, useNavigate} from 'react-router';

//Sumber Produk
//import variable dari folder products 'const products'
import { products } from '../products/products';

const ProductDetailPage = () => {
  // ambil nilai setelah path /product/:id(disini)
  const getParams = useParams();
  // dapatkan nilai id nya :
  const param = getParams.id;

  // ambil data dari const products yg id nya sama dengan const param
  const filteredProduct = products.filter((val) => {
    return val.id == parseInt(param);
  });

  // gunakan useNavigate dari 'react-router';
  const navigate = useNavigate();
  // fungsi tombol previous ( sebelumnya )
  const goToPrev = () =>{
    // ternary operator : jika nilai param > dari 1, maka navigate ke sebelumnya, jika tidak, navigate ke /products
    parseInt(param) > 1 ? navigate('/product/'+ (parseInt(param) - 1)) : navigate('/products/');
  }

  // fungsi tombol next ( setelahnya )
  const goToNext = () =>{
    // ternary operator : jika nilai param == jumlah elemen di dalam products, maka navigate ke /products, jika tidak, navigate ke product setelahnya
    parseInt(param) == products.length ? navigate('/products/') : navigate('/product/'+ (parseInt(param) + 1));
  }

  return (
    <>
      <h3 className="title_detail_product">{filteredProduct[0].nama.toUpperCase()}</h3>

      <div className="card_detail_product">
        <img className="gambar_detail_product" src={require(`../product_images/${filteredProduct[0].gambar}`)} />

        <div className="detail">
          <div>
  

            <p>
              ID : <i>{filteredProduct[0].id}</i>
            </p>
            <p>
              Nama : <i>{filteredProduct[0].nama}</i>
            </p>
            <p>
              Dimensi : <i>{filteredProduct[0].dimensi}</i>
            </p>
            <p>
              Uji Desak : <i>{filteredProduct[0].ujiDesak}</i>
            </p>
            <p>
              Harga : <i>Rp. {filteredProduct[0].harga.toLocaleString()},-</i>
            </p>

            <div>
            {/* tombol previous */}
            {param == 1 ? null : <button className="tombol tombol_next" onClick={goToPrev}>&laquo; Prev</button>}

            {/* tombol next */}
            {param == products.length ? null : <button onClick={goToNext} className="tombol tombol_next">Next &raquo;</button>}
            </div>

          </div>

          <Link to="/products" className="link">
            Kembali
          </Link>
        </div>
      </div>

      <div className="logo_wrapper">
        <img className="logo" src={require(`../gpm/gpm2.png`)} />
      </div>
    </>
  );
};

export default ProductDetailPage;

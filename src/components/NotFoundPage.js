import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <>
      <h2>Halaman tidak ditemukan!</h2>
      <Link to="/">
        <button>Kembali ke Halaman Utama!</button>
      </Link>
    </>
  );
};

export default NotFoundPage;

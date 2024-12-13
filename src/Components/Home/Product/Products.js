import React from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext';
import useMedia from '../../../Hooks/useMedia';
import styles from './Products.module.css';
import ProductItem from './ProductItem';

const Products = () => {
  const { getProducts, listProducts, addCart } = React.useContext(GlobalContext);
  const { product } = useParams();
  //const mobile = useMedia('(max-width: 480px)');

  React.useEffect(() => {
    product && getProducts(product);
  }, [product]);

  function handleClick(product) {
    addCart(product)
    /*
    jika Anda ingin mengubah cara produk ditambahkan
    ke keranjang, Anda bisa menggunakan logika ini:
    if (mobile) {
        //lakukan sesuatu yang berbeda
      } else {
        addCart(product) //gunakan fungsi default
      }
    */
  }

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.title}>{product ? product : 'Burguers'}</h2>
        <div className={styles.areaProducts}>
          {listProducts.map((product) => <ProductItem inputCart={handleClick} key={product.id} item={product} />)}
        </div>
      </div>
    </div>
  );
};

export default Products;

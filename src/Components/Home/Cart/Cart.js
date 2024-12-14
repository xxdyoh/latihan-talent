import React from 'react';
import { GlobalContext } from '../../../GlobalContext';
import { useNavigate } from 'react-router-dom';
import useMedia from '../../../Hooks/useMedia';
import CartItem from './CartItem';
import styles from './Cart.module.css';

const Cart = ({ isCheckout }) => {
  const mobile = useMedia('(max-width: 480px)');
  const { cart, total, openCart, setOpenCart } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  function handleOpenCart() {
    setOpenCart(!openCart);
  }

  return (
    <div className={`${styles.cart} ${openCart ? styles.openCart : styles.closeCart}`}>
      {mobile && (
        <button onClick={handleOpenCart} className={styles.btnCloseCart}>← Kembali</button>
      )}
      <h2 className={styles.title}>Pesanan</h2>
      {cart.length > 0 ? (
        <div className={styles.enterLeft}>
          <div className={styles.items}>
            {cart.map((item) => <CartItem key={item.id} product={item} />)}
          </div>
          <div className={styles.total}>
            <h4>Total</h4>
            <h4 className={styles.price}>Rp. {total}</h4>
          </div>
          <div className={styles.btn}>
            {!isCheckout ? (
              <button onClick={() => navigate('/checkout')}>Checkout</button>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        <p className={styles.none}>Anda belum menambahkan barang apa pun ke keranjang Anda.</p>
      )}
    </div>
  );
};

export default Cart;
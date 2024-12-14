import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import styles from './Finish.module.css';
import CartItem from '../Home/Cart/CartItem';

const Finish = () => {
  const { cart, total, typeBuy } = React.useContext(GlobalContext);

  return (
    <div className={styles.finishContainer}>
      <div className={styles.orderFinish}>
        <ion-icon name="checkmark-circle"></ion-icon>
        <h2>Pesanan selesai</h2>
      </div>
      <div className={styles.orderContainer}>
        <div className={styles.orderItems}>
          {cart.map((item) => <CartItem key={item.id} product={item} isFinish={true} />)}
        </div>
        <div className={styles.total}>
          <h4>Total</h4>
          <h4 className={styles.price}>Rp. {total}</h4>
        </div>
      </div>
      {typeBuy === "delivery" ? (
        <p className={styles.orderStore}>Pesanan Anda akan diantarkan dalam waktu 60 menit.</p>
      ) : (
        <p className={styles.orderStore}>Dalam 25 menit pesanan Anda akan siap dan dapat diambil di toko kami.</p>
      )}
    </div>
  )
}

export default Finish;

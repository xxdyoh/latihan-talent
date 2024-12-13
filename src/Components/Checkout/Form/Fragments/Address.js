import React from 'react';
import { GlobalContext } from '../../../../GlobalContext';
import RadioPayment from './RadioPayment';
import styles from './Address.module.css';

const Address = () => {
  const { cep, setCep, number, setNumber, complement, setComplement, address } = React.useContext(GlobalContext);
  const [error, setError] = React.useState(false);

  function validateCep() {
    if (cep.length < 8) {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor="cep" className={styles.label}>Kode Pos</label>
      <input id="cep" name="cep" placeholder="Masukkan kode pos Anda" className={styles.input} type="text" maxLength="8" onChange={(event) => { setCep(event.target.value); setError(false) }} onBlur={validateCep} value={cep} />
      {error && <p className={styles.error}>Masukkan kode pos yang valid</p>}
      {address && (
        <>
          <div className={styles.address}>
            <p>{address.rua}</p>
            <p>{address.cidade} / {address.uf} - {address.bairro}</p>
          </div>
          <label htmlFor="number" className={styles.label}>Nomor</label>
          <input id="number" name="number" placeholder="Masukkan nomor rumah" className={styles.input} type="number" onChange={(event) => setNumber(event.target.value)} value={number} />
          <label htmlFor="complement" className={styles.complement}>Lengkapan</label>
          <input id="complement" name="complement" placeholder="Masukkan lengkapan" className={styles.input} type="text" onChange={(event) => setComplement(event.target.value)} value={complement} />
          <h3 className={styles.subTitle}>Pembayaran</h3>
          <p className={styles.typePay}>Metode pembayaran:</p>
          <RadioPayment />
        </>
      )}
    </div>
  )
}

export default Address;

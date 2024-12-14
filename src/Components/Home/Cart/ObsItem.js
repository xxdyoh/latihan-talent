import React from 'react';
import { GlobalContext } from '../../../GlobalContext';
import styles from './ObsItem.module.css';

const ObsItem = () => {
  const { openObs, setOpenObs, idObs, obs, setObs, addObs } = React.useContext(GlobalContext);

  function closeObsBox() {
    setOpenObs(!openObs);
  }

  function saveObs() {
    addObs(idObs);
    closeObsBox();
  }

  return (
    <div className={styles.bgObs}>
      <div className={styles.areaObs}>
        <button className={styles.btnClose} onClick={closeObsBox}>x</button>
        <h3>Catatan</h3>
        <textarea type="text" onChange={(e) => setObs(e.target.value)} />
        <div className={styles.btnsObs}>
          <button onClick={closeObsBox}>Batal</button>
          <button onClick={saveObs}>Simpan</button>
        </div>
      </div>
    </div>
  );
};

export default ObsItem;
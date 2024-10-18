import styles from "./TransactionCard.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { PiPizza, PiGift } from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsSuitcase2 } from "react-icons/bs";

export default function TransactionCard({ transaction, onDelete, onEdit }) {
  const renderIcon = (category) => {
    switch (category) {
      case "food":
        return <PiPizza />;
      case "entertainment":
        return <PiGift />;
      case "travel":
        return <BsSuitcase2 />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardIcon}>
          {renderIcon(transaction.category)} {/* Use the renderIcon function */}
        </div>
        <div className={styles.cardInfo}>
          <h5>{transaction.title}</h5>
          <p>{transaction.date}</p>
        </div>
      </div>
      <div className={styles.cardInner}>
        <p className={styles.cardPrice}>{`₹${transaction.price}`}</p>
        <div className={styles.cardButtonWrapper}>
          <button className={styles.cardDelete} onClick={onDelete}>
            <IoMdCloseCircleOutline />
          </button>
          <button className={styles.cardEdit} onClick={onEdit}>
            <MdOutlineModeEdit />
          </button>
        </div>
      </div>
    </div>
  );
}

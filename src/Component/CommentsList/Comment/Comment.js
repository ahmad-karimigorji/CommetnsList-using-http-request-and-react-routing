import styles from "./Commnet.module.css";

const Comment = ({ comments, onClick }) => {
  return (
    <div className={styles.comment} onClick={onClick}>
      <p>name:</p>
      <p>{comments.name}</p>
      <p>email:</p>
      <p>{comments.email}</p>
    </div>
  );
};

export default Comment;

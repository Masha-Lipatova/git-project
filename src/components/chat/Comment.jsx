import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Comment = (props) => {
  return (
    <div className={styles.wrapper}>
      <label>Напиши комментарий</label>
      <input
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
      />
      <button onClick={props.sendMessage}>Отправить</button>
      <button onClick={() => props.setChatData([])}>Удалить</button>

      {props.showDialogReg && (
        <div>
          вы не авторизовались перейдите по ссылке <Link to="/">ссылке</Link>
        </div>
      )}
    </div>
  );
};

export default Comment;

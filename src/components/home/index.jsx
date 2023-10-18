import styles from "./style.module.css";

import { useState } from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";

const Home = () => {
  //const [user, setUser] = useState("");
  const [user, setUser] = useLocalStorage("USER", "");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.div}>
      <div className={styles.div1}>
        {user && (
          <div>
            <div>Приветствуем вас, уважаемый {user}</div>
            <button onClick={() => setUser("")}>Выйти</button>
          </div>
        )}

        {!user && (
          <div>
            <label>Введите ваше имя</label>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => setUser(inputValue)}>Сохранить</button>
          </div>
        )}
      </div>
      <div className={styles.div2}>
        Приветсвуем вас, коллеги, на нашем рабочем сайте.Здесь вы можете
        переписываться и обсуждать различные рабочие моменты.Также на сайте будт
        размещаться материалы для работы
      </div>
    </div>
  );
};

export default Home;
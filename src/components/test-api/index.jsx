import styles from "./style.module.css";

import { useEffect, useState } from "react";

const TestApi = () => {
  const [teamData, setTeamData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const url = "https://free-nba.p.rapidapi.com/teams?page=0";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "41008751aamshbc997488c0e783dp15300djsn5b09ffc49761",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setTeamData(res.data);
        setIsLoad(false);
      });
  }, []);

  return (
    <div className={styles.test}>
      <div>КОМАНДЫ</div>
      {isLoad && <div>Загрузка данных...</div>}
      {teamData.map((el) => {
        return (
          <div key={el.id}>
            {el.id}. {el.abbreviation} {el.city}
            <img
              src="https://cdn-icons-png.flaticon.com/512/73/73806.png"
              style={{ width: "20px", height: "20px" }}
              onClick={() => {
                setTeamData(
                  teamData.filter((filterElement) => el.id !== filterElement.id)
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TestApi;
import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/index";

// import API_URL from "../../config";

function Home() {
  const [info, setInfo] = useState([]);
  // const navigate = useNavigate(); // use navigate to navigate to a diffeerent page

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/`
      );
      const data = await result.json();

      setInfo(data.exercises);
      // console.log(data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {info.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          transcript={item.transcript}
          female={item.female.image}
          male={item.male.image}
          bodyArea={item.bodyAreas}
        />
      ))}
    </ul>
  );
}
//onclick =, click an image navuagte to reserve

export default Home;

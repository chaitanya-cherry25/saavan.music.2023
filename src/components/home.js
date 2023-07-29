import React from 'react'
import Player from './player'
import Select from './select'
import { useState, useEffect } from 'react'
import "../style/home.css"
import Songs from './songs'


const Home = () => {

  const [data, setData] = useState([]);

  const [userInp, setuserInp] = useState("");

  console.log(userInp);


  const SearchSong = () => {
    const baseUrl = "https://saavn.me/modules?language=hindi,english"
    fetch(baseUrl, {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(setData => setData.json())
      .then(setdata => setData(setdata.data.albums))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    SearchSong();
  }, []);

  console.log(data);






  return (

    <div className='main-comp' >
      <div className='pands'>
        <Select x={data} />
        <Player data={data} setuserInp={setuserInp} />
      </div>
      <div>
        <Songs userInp={userInp} />
      </div>
    </div>
  )
}

export default Home
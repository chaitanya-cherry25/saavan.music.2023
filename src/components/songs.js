import React from 'react'
import "../style/songs.css"
import { useState, useEffect } from 'react'


const Songs = (userInp) => {



    console.log(userInp)

    const [song, setSong] = useState();

    const Playsong = () => {
        const baseUrl = (`https://saavn.me/albums?id=${userInp.userInp}`)
        console.log(baseUrl)
        fetch(baseUrl, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(setSong => setSong.json())
            .then(setsong => {
                console.log(song);
                setSong(setsong)
            }

            )

            .catch(err => console.log(err))
    }

    useEffect(() => {
        Playsong();
    }, [userInp]);



    // console.log(song.data);
    return (
        <div>
            {
                song && song.data &&

                <div >
                    <audio className='a.tag' src={song.data.songs[0].downloadUrl[0].link} controls />
                </div>

            }


        </div>
    )
}

export default Songs;

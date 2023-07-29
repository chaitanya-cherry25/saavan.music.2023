import React from 'react'
import "../style/player.css"

const Player = ({data, setuserInp}) => {

  if(data.length){

    console.log(data)
  }

  return (


    <div className='player'>

      <div className='cplayer'>
        <img className='taylor' src="https://c4.wallpaperflare.com/wallpaper/86/1015/667/skrillex-wallpaper-preview.jpg" />
      </div>


      <div className='f-songs'>


        {data.length && data.map(e => {
            console.log(e);
            return (
          
                <div  onClick={()=> setuserInp(e.id)}>
             <img src={e.image[1].link}/>
              </div>

                
              
            )
          })
        }


      </div>


    </div>
  )
}

export default Player
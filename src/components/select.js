import React from 'react'
import "../style/select.css";
import { AiFillHome } from "react-icons/ai"
import { BsFileMusicFill } from "react-icons/bs"
import { MdAlbum } from "react-icons/md"
import { BiSolidPlaylist } from "react-icons/bi"
import { BsPersonBadgeFill } from "react-icons/bs"





const Select = ( x) => {

    console.log(x)


    return (


        <div className='select-api'>

            <div className='s-icon'>
                <img className='m-icon' src="https://cdn-icons-png.flaticon.com/512/1517/1517174.png" />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><b style={{ color: "red" }}>Shaze</b><p>Sound</p></div>
            </div>


            <div>
                <div style={{ color: "red", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.3rem" }}><AiFillHome /> <p style={{ color: "black" }}>Home</p></div>
            </div>

            <div className='search-content'>

                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"1rem"}}>
                  <div><b>Search content</b></div>

                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BsFileMusicFill /> <button style={{ color: "black" }}>Search Songs</button></div>

                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><MdAlbum /> <button style={{ color: "black" }}>Search Album</button></div>

                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BsPersonBadgeFill /> <button style={{ color: "black" }}>Search Artist</button></div>

                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BiSolidPlaylist /> <button style={{ color: "black" }}>Search Playlist</button></div>
                </div>
<br/>
<br/>


                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", gap:"1rem"}}>

                    <div><b>Details</b></div>
                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BsFileMusicFill /> <button style={{ color: "black" }}>Song Details</button></div>

                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><MdAlbum /> <button style={{ color: "black" }}>Album Details</button></div>

                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BsPersonBadgeFill /> <button style={{ color: "black" }}>Artist Details</button></div>

                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BiSolidPlaylist /> <button style={{ color: "black" }}>Playlist Details</button></div>
                </div>

            </div>



        </div>
    )
}


export default Select
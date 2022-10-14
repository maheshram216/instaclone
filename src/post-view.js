import { useEffect, useState } from "react";
import Logo from "./assets/icon.svg"
import Camera from "./assets/camera.png"
import Image10x from '../src/assets/10x.png'
import SanFrance from '../src/assets/san france.jpg'
import Flight from '../src/assets/flight.jpg'
import "./postview.css"
import { Link } from "react-router-dom";

const PostView = () => {

    const Data = [
        {
            name: "Siva",
            location: "Bengaluru",
            likes: 64,
            description: "Kick start your career",
            PostImage: Image10x,
            date: "21/11/2022",
        },
        {
            name: "Neeraj",
            location: "Pune",
            likes: 30,
            description: "Sample Description",
            PostImage: Flight,
            date: "24/11/2022",
        },
        {
            name: "Rahul",
            location: "Hyderabad",
            likes: 30,
            description: "Sample Description for Post",
            PostImage: SanFrance,
            date: "02/11/2022",
        }
    ]

    return (
        <>
            <div className="container">
                <header>
                    <div className="nav">
                        <img src={Logo} alt="insta-log" width={45}></img>
                        <span style={{ color: '#006238', padding: "5px 1120px 0px 0px", width: "289px", float: "left", font: "normal normal normal 50px/50px Palatino" }}>Instaclone</span>
                        <Link to='/post'><img src={Camera} alt="camera" width={30} height={50}></img> </Link>
                    </div>
                </header>
                <hr />
                <div>
                    {
                        Data.map((user, i) => {
                            return (
                                <div className="post" key={i}>
                                    <div className="user-Info" >
                                        <img src="https://as2.ftcdn.net/v2/jpg/02/01/28/75/1000_F_201287555_3Qjcz8eIja7kyVuMcfTLUX3JtCX0UfgO.jpg" alt="dotted icon" width="30px"></img>
                                        <h3>{user.name}</h3>
                                        <span>{user.location}</span>
                                    </div>
                                    <div className="user-Img">
                                        <img src={user.PostImage} alt="user img"></img>
                                    </div>
                                    <div className="icon">
                                        <img src="https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png" alt="heart icon" width="38px"></img>
                                        <p><img src="https://cdn0.iconfinder.com/data/icons/simple-line-design/100/Fast_delivery-512.png" alt="rocket icon" width="20px"></img></p>
                                    </div>
                                    <div className="user-meta">
                                        <span>{user.date}</span>
                                    </div>
                                    <div className="user-likes">
                                        <span>{user.likes} likes</span>
                                    </div>
                                    <div className="user-description">
                                        <span>{user.description}</span>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default PostView;
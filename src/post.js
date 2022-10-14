import './post.css'
import Logo from "./assets/icon.svg"
import Camera from "./assets/camera.png"
import { useHistory } from 'react-router-dom';

const Post = () => {
    const history = useHistory();
    const handlePost = () => {
        history.push('/postview');
    }
    return (
        <>
            <div className="container">
                <header>
                    <div className="nav">
                        <img src={Logo} alt="insta-log" width={45}></img>
                        <span style={{ color: '#006238', padding: "5px 1120px 0px 0px", width: "289px", float: "left", font: "normal normal normal 50px/50px Palatino" }}>Instaclone</span>
                        <img src={Camera} alt="camera" width={30} height={50}></img>
                    </div>
                </header>
                <hr />
            </div>
            <div className="form-box">
                <form method='POST'>
                    <input type='file' className="file"></input> <br />
                    <input type='text' placeholder='Author' className="author"></input>
                    <input type='text' placeholder="Location" className="location"></input> <br />
                    <input type='text' placeholder="Description" className="Description"></input> <br />
                    <input type='button' value='Post' className="button" onClick={handlePost}></input>
                </form>
            </div>
        </>
    )
};

export default Post;
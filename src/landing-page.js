import Banner from './landing.png'
import './landing-page.css'
import { Link, useHistory } from 'react-router-dom'

const LandingPage = () => {
    const history = useHistory()
    const handleRoute = () => {
        history.push("/postview")
    }
    return (
        <>
            <div className="landing-conatiner">
                <img src={Banner} alt="Banner "></img>
                <div className='content'>
                    <h2>
                        10x Team 04
                    </h2>
                    {/* <Link to="/postview">Enter</Link> */}
                    <button onClick={handleRoute}>Enter</button>
                </div>

            </div>

        </>
    )
}
export default LandingPage;
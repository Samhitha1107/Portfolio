import { GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react'
import './Styles/Main.scss';
import Hitha from './assets/samhitha.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>I am Samhitha A Ram</h1>
                            <p>Software Engineer</p>

                            <div className="icons">
                                <LinkedIn className='icon'/>
                                <GitHub className='icon'/>
                            </div>


                    <div className="buttons">
                        <button>See Me</button>
                        <button>Hire Me</button>
                    </div>
                    </div>
                </div>

                <div className='main_img'>
                    <img src={Hitha} alt=""></img>
                </div>
            </div>
        </div>
    )
}


export default Main

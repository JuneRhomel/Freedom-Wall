import React, { useState } from 'react'
import Add from '../components/Add'
import {useDrag} from "react-use-gesture"

export default function Cards() {
    const [drag,setDrag] = useState({x:100, y:0})
    const bindCardPos = useDrag((param)=> { 
        setDrag({
            x:param.offset[0],
            y:param.offset[1],
        })
    })

    return (
        <section className='all-cards'>
            <div {...bindCardPos()} className='card' style={{
                'position':'relative',
                "top": drag.y,
                "left": drag.x
                
                }}>
                <div  className='head-card'>
                    <h2>June Rhomel</h2>
                    <p>Jun 2, 2023</p>
                </div>
                <div className='body-card'>
                <div>
                    <img src="https://i.cbc.ca/1.3906016.1482269864!/fileImage/httpImage/profile-pics.jpg" alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, mollitia! Labore ipsum rerum atque in voluptatum consequuntur molestiae iste odit magni dignissimos. Modi accusantium dicta explicabo neque velit expedita natus.</p>
                </div>
                </div>
            </div>
            <Add/>
        </section>
    )
}

import React from 'react'
import Add from '../Add'

export default function Cards() {
    return (
        <section className='all-cards'>
            <div className='card'>
                <div className='head-card'>
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

import React from 'react'
import { useState } from 'react'

export default function Add() {
    const [open, setOpne] = useState(false)
    const hover = () => {
        document.querySelector('.exit').classList.toggle('action-hover')
    }
    const upload = () => {
        console.log()
        setOpne(true)
    }
    const exit = () => {
        console.log(open)
        setOpne(false)
    }
    return (
        <div>
            <div className='add-btn' onClick={upload}>
                <i class="fa-solid fa-circle-plus"></i>
            </div>
            {open?             <div className='center'>
                    <div className='card-upload' onMouseLeave={hover} >
                        <div className='exit' onClick={exit}>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                        <div className='head-card'>
                            <h2>June Rhomel</h2>
                            <p>Jun 20 2023</p>
                        </div>
                        <div className='body-card '>
                            <div className='btn-upload'>
                                <p>Image Upload :</p>
                                <button>Upload</button>
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className='btn-upload-box'>
                                <button className='btn-upload-send'>Upload</button>
                            </div>
                        </div>
                    </div>
                </div>: ""}



        </div>
    )
}

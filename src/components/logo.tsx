import { CheckCircleOutline } from 'heroicons-react'
import React from 'react'
import './logo.css'

function Logo() {
    return (
        <h1 className="font-bold text-2xl tracking-normal text-white">
            Tallyd
            <CheckCircleOutline size={20} className="inline-block" />
        </h1>
    )
}
export default Logo

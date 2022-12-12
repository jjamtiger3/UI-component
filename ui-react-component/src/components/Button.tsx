import React, { useState, useEffect } from 'react'
import { IButton } from '../interfaces/components/Button.interface';
import buttonStyles from '../styles/components/Button.module.css'


const Button: React.FC<IButton> = function (props: any) {
    return (
        <button onClick={props.onClick}>{props.label}</button>
    )
}

export default Button;
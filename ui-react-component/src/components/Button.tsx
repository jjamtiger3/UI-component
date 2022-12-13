import React, { useState, useEffect } from 'react'
import { IButton } from '../interfaces/components/Button.interface';
import buttonStyles from '../styles/components/Button.module.css'


const Button: React.FC<IButton> = function (props: any) {
    // TODO Icon
    return (
        <div className={buttonStyles['button-container']}>
            <button onClick={props.onClick}>
                {props.label}
            </button>
        </div>
    )
}

export default Button;
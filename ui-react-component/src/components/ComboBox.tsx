import React, { useState } from 'react'
import { IComboBox } from '../interfaces/components/ComboBox.interface'
import comboStyles from '../styles/components/ComboBox.module.css'


const ComboBox: React.FC<IComboBox> = function ({ comboItems }: IComboBox) {
    const [items, setItems] = useState(comboItems || []);
    function handleChecked (checked: boolean, index: number) {
        items[index].checked = checked;
        console.log(items);
        setItems([...items]);
    }
    return (
        <div className={comboStyles.container}>
            {
                items.map((item, index) => {
                    return (
                        <div key={index}>
                            <input type={'checkbox'} checked={item.checked} onChange={() => handleChecked(!item.checked, index)}></input>
                            <label>{item.label}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ComboBox;
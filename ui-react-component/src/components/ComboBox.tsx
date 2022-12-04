import React, { useState } from 'react'
import { IComboBox } from '../interfaces/components/ComboBox.interface'
import commonStyles from '../styles/Common.module.css'
import comboStyles from '../styles/components/ComboBox.module.css'


const ComboBox: React.FC<IComboBox> = function (props: IComboBox) {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState(props.comboItems || []);
    const [label, setLabel] = useState('선택');
    const [selectedItems, setSelectedItems] = useState([]);

    function handleChecked (checked: boolean, index: number) {
        items[index].checked = checked;
        console.log(items);
        setItems([...items]);
    }
    function toggle () {
        setIsOpen(!isOpen);
    }

    function selectItem(item) {
        console.log(item);
        setLabel(item.label);
    }
    return (
        <div className={comboStyles.container}>
            <div className={comboStyles['combo-outer']}></div>
            <div className={`${comboStyles['combo-wrapper']}`} onClick={toggle}>
                <span className={comboStyles.label}>
                    { label }
                </span>
                {

                    isOpen && 
                        <div className={comboStyles['combo-inner']}>
                            {
                                items.map((item, index) => {
                                    return (
                                        <div key={index} onClick={() => selectItem(item)}>
                                            {/* <input type={'checkbox'} checked={item.checked} onChange={() => handleChecked(!item.checked, index)}></input> */}
                                            <label>{item.label}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default ComboBox;
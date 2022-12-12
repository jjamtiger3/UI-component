import React, { useState, useEffect } from 'react'
import { IComboBox } from '../interfaces/components/ComboBox.interface'
import { IComboItem } from '../interfaces/components/ComboItem.interface';
import comboStyles from '../styles/components/ComboBox.module.css'


const ComboBox: React.FC<IComboBox> = function (props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState(props.comboItems || []);
    const [label, setLabel] = useState('선택');
    const [selectedItem, setSelectedItem] = useState<IComboItem>({label: '선택'});

    useEffect(() => {
        setLabel(selectedItem.label);
        setIsOpen(false);
    }, [selectedItem]);

    function toggle () {
        setIsOpen(!isOpen);
    }

    function selectItem(item) {
        setSelectedItem(item);
        props.getSelectedItem && props.getSelectedItem(item);
    }
    function handleOuterClick() {
        setIsOpen(false);
    }
    return (
        <div className={`${comboStyles['combobox-container']} ${{...props}}`} style={props.styles}>
            <div className={comboStyles['label-wrapper']} onClick={toggle}>
                <span>{label}</span>
                <span className={`${comboStyles.icon} ${comboStyles['arrow-down']}`}></span>
            </div>
            <div className={`${comboStyles.dropdown} ${isOpen ? comboStyles.open : ''}`}>
                <div className={comboStyles['combo-outer']} onClick={handleOuterClick}></div>
                <ul className={comboStyles['combo-item-wrapper']}>
                {
                    items.map((item, index) => {
                        return (
                            <li className={comboStyles['combo-item']} key={index} onClick={() => selectItem(item)}>
                                <span>{item.label}</span>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default ComboBox;
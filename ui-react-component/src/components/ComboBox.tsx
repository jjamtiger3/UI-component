import React, { useState } from 'react'
import { IComboBox } from '../interfaces/components/ComboBox.interface'
import { IComboItem } from '../interfaces/components/ComboItem.interface';
import comboStyles from '../styles/components/ComboBox.module.css'


const ComboBox: React.FC<IComboBox> = function (props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState(props.comboItems || []);
    const [label, setLabel] = useState('선택');
    const [selectedItems, setSelectedItems] = useState<Array<{ comboItem: IComboItem }> >([]);

    function handleChecked (checked: boolean, index: number) {
        items[index].checked = checked;
        console.log(items);
        setItems([...items]);
    }
    function toggle () {
        setIsOpen(!isOpen);
    }

    function selectItem(item) {
        setLabel(item.label);
        setIsOpen(false);
        props.getSelectedItems && props.getSelectedItems(item);
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
                <div className={comboStyles['combo-item-wrapper']}>
                {
                    items.map((item, index) => {
                        return (
                            <div className={comboStyles['combo-item']} key={index} onClick={() => selectItem(item)}>{item.label}</div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default ComboBox;
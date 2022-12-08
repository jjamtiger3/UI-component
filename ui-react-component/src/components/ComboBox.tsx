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
        setItems([...items]);
    }
    function toggle () {
        setIsOpen(!isOpen);
    }

    function selectItem(item) {
        if (!props.multiSelect) {
            setLabel(item.label);
            setIsOpen(false);
        } else {
            console.log(item)
            // setLabel(_items.filter((item) => item.checked).join(','));
        }
        props.getSelectedItems && props.getSelectedItems(items.filter((item) => item.checked));
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
                            // TODO html FOR
                            <li className={comboStyles['combo-item']} key={index} onClick={() => selectItem(item)}>
                                {props.multiSelect ? (<><input type="checkbox"></input><span>{item.label}</span></>) : <span>{item.label}</span>}
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
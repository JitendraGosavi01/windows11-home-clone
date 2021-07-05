import { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faThLarge,
    faSortAmountUpAlt,
    faUndo,
    faPlusCircle,
    faCogs,
    faPaintBrush,
    faTerminal,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { faChromecast } from '@fortawesome/free-brands-svg-icons'

import './ContextMenu.css'


const ContextMenu = (props) => {
    const [position, setPosition] = useState({})
    const [display, setDisplay] = useState('')
    const handleContextMenu = (e) => {
        e.preventDefault()
        // console.log(e)
        setDisplay('block')
        setPosition({ x: e.pageX, y: e.pageY })
        return false
    }

    const hideContextMenu = (e) => {
        console.log(e.which, e.keyCode)
        setDisplay('none')
        let keyCode = e.which || e.keyCode
        if (keyCode === 27) {
            setDisplay('none')
        }
    }
    document.addEventListener('contextmenu', handleContextMenu)
    // window.addEventListener('onclick', hideContextMenu)
    // window.addEventListener('onkeydown', hideContextMenu)
    window.onclick = hideContextMenu
    window.onkeydown = hideContextMenu

    return (
        <Container >
            <MenuList style={{
                position,
                display: display ?? 'block',
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}>
                <MenuItems>
                    <FontAwesomeIcon icon={faThLarge} size="xs" /> <ItemName>View</ItemName>
                    <FontAwesomeIcon className="view" icon={faChevronRight} size="s" />
                </MenuItems>
                <MenuItems>
                    <FontAwesomeIcon icon={faSortAmountUpAlt} size="xs" /><ItemName>Sort by</ItemName>
                    <FontAwesomeIcon className="sort" icon={faChevronRight} size="s" />
                </MenuItems>
                <ListSeparator disabled></ListSeparator>
                <MenuItems>
                    <FontAwesomeIcon icon={faUndo} size="xs" /><ItemName>Undo Rename</ItemName>
                </MenuItems>
                <MenuItems>
                    <FontAwesomeIcon icon={faPlusCircle} size="xs" /><ItemName>New Item</ItemName>
                </MenuItems>
                <ListSeparator></ListSeparator>
                <MenuItems>
                    <FontAwesomeIcon icon={faCogs} size="xs" /><ItemName>Display Settings</ItemName>
                </MenuItems>
                <MenuItems>
                    <FontAwesomeIcon icon={faPaintBrush} size="xs" /><ItemName>Personalize</ItemName>
                </MenuItems>
                <ListSeparator></ListSeparator>
                <MenuItems>
                    <FontAwesomeIcon icon={faTerminal} size="xs" /><ItemName>Open Windows Terminal</ItemName>
                </MenuItems>
                <ListSeparator></ListSeparator>
                <MenuItems>
                    <FontAwesomeIcon icon={faChromecast} size="xs" /><ItemName>More Options</ItemName>
                    <FontAwesomeIcon className="more" icon={faChevronRight} size="s" />
                </MenuItems>
            </MenuList>
        </Container >
    )
}


export default ContextMenu


const Container = styled.div`
            background:white;
            border:0 2px 2px 0 red;
            `

const MenuList = styled.ul`
            display:${style => style.display ?? 'none'};
            top:${style => style.top};
            left:${style => style.left};
            width:250px;
            height:auto;
            background-color:white;
            box-shadow: 0 0 20px 0 #ccc;
            list-style:none;
            position:absolute;
            border-radius: 12px;
            padding:10px 0 10px 20px;
`

const MenuItems = styled.li`
            color:black
            font-family:revert;
            &:hover{
                background:#f1f5f7f2;
                border-left:4px sold #666;
            }
            padding: 10px 5px 10px 5px;
            border-left: 4px solid transparent;
            width:86%;
            text-align:left;
            `

const ListSeparator = styled.li`
            height:1px;
            background:#dedede;
            margin:2px 0px 2px 0px;
            `

const ItemName = styled.span`

padding: 0 10px 0 5px;
`
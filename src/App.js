
import { useState, useEffect } from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronUp,
  faWifi,
  faBatteryEmpty,
  faBatteryFull,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryThreeQuarters,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons'



import chrome from './assets/images/chrome.png'
import explorer from './assets/images/explorer.png'
import edge from './assets/images/edge.png'
import shell from './assets/images/shell.png'
import start from './assets/images/start.png'
import vscode from './assets/images/vscode.png'
import search from './assets/images/search1.png'
import wifiDisconnected from './assets/images/wifi-disconnected.png'

import ContextMenu from './components/ContextMenu/ContextMenu'

function App() {
  let [time, setTime] = useState('')
  const [internetStatus, setInternetStatus] = useState(window.navigator.onLine)
  const [batteryLevel, setBatteryLevel] = useState(0)
  const [batteryIcon, setBatteryIcon] = useState('')
  function handleMenuClick(name) {
    // e.preventDefault() 
    alert(name)
    if (name === 'widget') {

    }
  }

  function getTime() {
    let date = new Date();
    let hours = date.getHours() % 12; //return 12 hours time format
    hours = hours < 10 ? `0${hours}` : hours
    let ampm = hours >= 12 ? 'AM' : 'PM'
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes

    return `${hours}:${minutes} ${ampm}`

  }

  function getDate() {
    let date = new Date();
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  function getBattery() {
    window.navigator.getBattery()
      .then((battery) => {
        // console.table(battery)
        setBatteryLevel(battery.level)
        let batteryLevel = battery.level * 100
        if (batteryLevel > 80 && batteryLevel <= 100) {
          setBatteryIcon(faBatteryFull)
        }
        if (batteryLevel > 60 && batteryLevel <= 80) {
          setBatteryIcon(faBatteryThreeQuarters)
        }
        if (batteryLevel > 40 && batteryLevel <= 60) {
          setBatteryIcon(faBatteryHalf)
        }
        if (batteryLevel > 20 && batteryLevel <= 40) {
          setBatteryIcon(faBatteryQuarter)
        }
        if (batteryLevel >= 0 && batteryLevel <= 20) {
          setBatteryIcon(faBatteryEmpty)
        }


      })
  }

  useEffect(() => {
    getBattery()
    setInternetStatus(window.navigator.onLine)
  }, [time])

  setInterval(() => {
    // getBattery()

    setTime(getTime())
  }, 1000)

  const handleContextClick = (e) => {
    e.preventDefault()
  }
  return (
    <div className="App">

      <div className="footer">

        <div className="center-item-container">
          <div className="start" onClick={e => handleMenuClick('start')}>
            {/* <FontAwesomeIcon className="fontawesome" icon={faWindows} size="2x" color='#1145fd' /> */}
            <img src={start} className="fontawesome" alt="chrome" height="30px" width="30px" />
          </div>
          <div className="search" onClick={e => handleMenuClick('search')}>
            {/* <FontAwesomeIcon className="fontawesome" icon={faSearch} size="2x" color='#1145fd' /> */}
            <img src={search} className="fontawesome" alt="chrome" height="30px" width="30px" />
          </div>
          <div className="edge" onClick={e => handleMenuClick('edge')}>
            {/* <FontAwesomeIcon className="fontawesome" icon={faClone} size="2x" color='#1145fd' /> */}
            <img src={edge} className="fontawesome" alt="edge" height="30px" width="30px" />
          </div>
          <div className="vscode" onClick={e => handleMenuClick('vscode')}>
            {/* <FontAwesomeIcon className="fontawesome" icon={faCog} size="2x" color='#1145fd' /> */}
            <img src={vscode} className="fontawesome" alt="vscode" height="30px" width="30px" />
          </div>
          <div className="explorer" onClick={e => handleMenuClick('explorer')}>
            {/* < FontAwesomeIcon className="fontawesome" icon={faFolder} size="2x" color='#1145fd' /> */}
            <img src={explorer} className="fontawesome" alt="chrome" height="30px" width="30px" />
          </div >
          <div className="explorer" onClick={e => handleMenuClick('explorer')}>
            <img src={chrome} className="fontawesome" alt="chrome" height="30px" width="30px" />
          </div >
          <div className="shell" onClick={e => handleMenuClick('shell')}>
            <img src={shell} className="fontawesome" alt="shell" height="30px" width="30px" />
          </div >
        </div >
        <div className="right-item-container">
          <div>
            <FontAwesomeIcon className="fontawesome" icon={faChevronUp} size="s" />
          </div>
          <div className="group-icon date-time">
            <span>ENG</span>
            <br />
            <span>US</span>
          </div>
          <div className="group-icon speaker-battery-wifi">

            {internetStatus
              ? <FontAwesomeIcon className="fontawesome" icon={faWifi} size="0.7x" />
              : <img src={wifiDisconnected} style={{ marginTop: '-12px' }} className="fontawesome" alt="chrome" height="25px" width="25px" />
            }
            <FontAwesomeIcon className="fontawesome" icon={faVolumeUp} size="0.7x" />
            <FontAwesomeIcon className="fontawesome tooltip" icon={batteryIcon} size="0.7x" onClick={e => handleMenuClick(batteryLevel)} />
          </div>
          <div className="group-icon date-time">
            <span>{time} </span>
            <br />
            <span>{getDate()}</span>
          </div>
          <div className="notificationBadge">
            10
          </div>
        </div>
      </div >

      <ContextMenu onContextMenu={e => handleContextClick(e)}></ContextMenu>
    </div >
  );
}

export default App;

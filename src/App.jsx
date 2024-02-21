import { useState } from 'react'
import './App.css'
import gptLogo from '/chatgpt.svg'
import addBtn from '/add-30.png'
import messageIcon from '/message.svg'
import home from '/home.svg'
import saved from '/bookmark.svg'
import upgrade from '/rocket.svg'
import send from '/send.svg'
import userIcon from '/user-icon.png'
import gptimgLogo from '/chatgptLogo.svg'

function App() {

  return (
  <div className='App'>
    <div className="sidebar">
    <div className="upperSide">
        <div className="upperSideTop"><img src={gptLogo} alt="gpt" className="logo" /><span className='brand'>CHATGPT</span></div>
        <button className='midBtn'><img src={addBtn} alt="add" className="addBtn" />New Chat</button>
        <div className="upperSideBottom">
          <button className='query'><img src={messageIcon} alt="chats" />What is programming</button>
          <button className='query'><img src={messageIcon} alt="chats" />How to use an API?</button>

        </div>
    </div>
    <div className="lowerSide">
      <div className="listItems"><img src={home} alt="home" className="listItemsImg" />Home</div>
      <div className="listItems"><img src={saved} alt="saved" className="listItemsImg" />Saved</div>
      <div className="listItems"><img src={upgrade} alt="upgrade" className="listItemsImg" />Upgrade</div>

    </div>
    </div>
    <div className="main">
      <div className="chats">
    <div className="chat">
      <img className ='chatimg'src={userIcon} alt="" /><p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eaque eum modi minus pariatur id, cum odit suscipit nobis laudantium doloribus numquam aliquam sed praesentium. Repudiandae modi voluptates sit quod?</p>
    </div>
    <div className="chat">
      <img className ='chatimg bot' src={gptimgLogo} alt="" /><p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eaque eum modi minus pariatur id, cum odit suscipit nobis laudantium doloribus numquam aliquam sed praesentium. Repudiandae modi voluptates sit quod?</p>
    </div>
      </div>
      <div className="chatFooter">
        <div className="inp">
          <input type="text" placeholder='Write your prompt!' /> <button><img src={send} alt="send" /></button>
        </div>
        <p>CHATGPT may produce incorrect results! Clone done by John</p>
      </div>
    </div>

  </div>
  )
}

export default App

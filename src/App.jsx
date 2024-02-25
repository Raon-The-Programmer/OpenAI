import { useEffect, useRef, useState } from 'react';
import './App.css';
import gptLogo from '/chatgpt.svg';
import addBtn from '/add-30.png';
import messageIcon from '/message.svg';
import home from '/home.svg';
import saved from '/bookmark.svg';
import upgrade from '/rocket.svg';
import { IoSend } from "react-icons/io5";
import userIcon from '/user-icon.png';
import gptimgLogo from '/chatgptLogo.svg';
import { sendMsg } from './openai';


function App() {
  
  const msgEndRef = useRef(null);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState([
    {
      text: "Hi, I'm a ChatGPT clone developed by John!",
      isBot: true
    }
  ]);

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  const scrollToBottom = () => {
    msgEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if(!input.trim()) return;
    setSending(true)
    const text = input;
    setInput('');
    const res = await sendMsg(input);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true }
    ]);
    setSending(false)
  };
const handleEnter=async(e)=>{
  if(e.key === 'Enter') await handleSend()
}
const handleQuery=async(e)=>{
    const text = e.target.value;
    const res = await sendMsg(input);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true }
    ]);
}
  return (
    <div className='App'>
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="gpt" className="logo" />
            <span className='brand'>CHATGPT</span>
          </div>
          <button className='midBtn' onClick={()=>{window.location.reload()}}>
            <img src={addBtn} alt="add" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className='query' onClick={handleQuery} value={"What is programming"}>
              <img src={messageIcon} alt="chats" />
              What is programming
            </button>
            <button className='query' onClick={handleQuery} value={'How to use an API?'}>
              <img src={messageIcon} alt="chats" />
              How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={upgrade} alt="upgrade" className="listItemsImg" />
            Upgrade
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {message.map((message, i) => (
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img className='chatimg' src={message.isBot ? gptimgLogo : userIcon} alt="" />
              <p className="text">{message.text}</p>
            </div>
          ))}
          <div ref={msgEndRef} />
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Write your prompt!' value={input} onKeyDown={handleEnter} onChange={(e) => setInput(e.target.value)} />
            <div onClick={handleSend} style={{ cursor: 'pointer' }}>
              {sending ? ( 
        <IoSend size={25} style={{ opacity: 0.5 }} />      ) : (
                <IoSend size={25} />
              )}
            </div>
          </div>
          <p>CHATGPT may produce incorrect results! Clone done by John</p>
        </div>
      </div>
    </div>
  );
}

export default App;

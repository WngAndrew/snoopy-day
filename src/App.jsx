import { useState } from 'react'
import snoopyImg from './img/snoopy_img.png'
import birthdaySnoopyImg from './img/birthday_snoopy.png'
import snoopyGoodDay from './img/snoopy_goodday.png'
import snoopyHoldOn from './img/snoopy_hold.png'
import tell from './img/tell.png'
import tell2 from './img/tell2.png'
import dance from './img/dance.png'
import love from './img/love.png'
import cool from './img/cool.png'
import smart from './img/smart.png'
import hug from './img/hug.png'
import thoughtful from './img/thoughtful.png'
import kind from './img/kind.png'
import loyal from './img/loyal.png'
import stink from './img/stink.png'
import laugh from './img/laugh.png'
import music from './img/music.png'
import happy from './img/happy.png'
import party from './img/party.png'
import shop from './img/shop.png'
import jump from './img/jump.png'
import './App.css'


const scriptSteps = [
  { text: 'Megan!!! Hi!!!', image: snoopyImg },
  { text: 'Happy Birthday Stinker 🎉🎉🎉', image: birthdaySnoopyImg },
  { text: "You're 22 now!!! Whoop!", image: birthdaySnoopyImg },
  { text: 'I hope you have a super duper awesome day today', image: snoopyGoodDay },
  { text: 'But before you go off an have the best day ever:', image: snoopyHoldOn },
  { text: 'I wanted to tell you something 🤭', image: tell },
  { text: "You're the most awesome girl ever of all time", image: dance },
  { text: "It's true!", image: snoopyImg },
  { text: 'So I just wanted to say', image: tell2 },
  { text: 'I love you so so so so soooo much!', image: love },
  { text: 'You areeee', image: snoopyImg },
  { text: 'Genuine and down to earth', image: cool },
  { text: 'Smart and passionate', image: smart },
  { text: 'Pretty and graceful', image: hug },
  { text: 'Thoughtful and intentional', image: thoughtful },
  { text: 'Kind and empathetic', image: kind },
  { text: 'Loyal and present', image: loyal },
  { text: 'Silly and stinky 😹', image: stink },
  { text: 'Especially that last one 🤭', image: laugh },
  { text: "And it's true you can't even deny it Stinker #2", image: laugh },
  { text: 'Tiny stinker the stink leader', image: laugh },
  { text: 'Anywho', image: snoopyImg },
  { text: "I'm a lucky guy", image: snoopyImg },
  { text: "I'm proud to call you my girlfriend", image: love },
  { text: "You're a really awesome person", image: music },
  { text: 'And you make me happy 😊', image: happy },
  { text: 'Now get out there and have the best birthday EVERRRR', image: party },
  { text: "Get coconut water and buy something you don't need", image: shop },
  { text: 'Do a jumping jack and spin aroudn!', image: jump },
  { text: 'Be the awesome little stinker that you are!', image: snoopyImg },
  { text: 'I love you Megan', image: snoopyImg }
]

const randomMessages = [
  { text: 'out', image: snoopyImg },
]

function App() {
  const [index, setIndex] = useState(0)
  const [message, setMessage] = useState('')
  const [currentImage, setCurrentImage] = useState(snoopyImg)

  const handleClick = () => {
    if (index < scriptSteps.length) {
      const { text, image } = scriptSteps[index]
      setMessage(text)
      setCurrentImage(image)
      setIndex(index + 1)
    } else {
      const randomStep = randomMessages[Math.floor(Math.random() * randomMessages.length)]
      setMessage(randomStep.text)
      setCurrentImage(randomStep.image)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        textAlign: 'center',
      }}
    >
      <div className="image-frame" onClick={handleClick}>
        <img src={currentImage} alt="Snoopy celebrating" className="image-frame__img" />
      </div>
      {message && <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{message}</p>}
    </div>
  )
}

export default App

import './Home.css'
import {AiFillStar} from 'react-icons/ai'

function Home() {
  return(
    <div>
      <div className='Home'>
        <div className='Home-half'>
          <text className='Title-text'>Learn Poker from the Best</text>
          <text className='Body-text'>Bring your game to the next level and join our highly-engaged community supported by some of the world's best poker players</text>
        </div>
        <div className='Home-half'>

        </div>
      </div>
      <div className='Home2'>
        <div className='Home-half'>
          <text className='Title-text2'>Our Membership</text>
          <div className='Text-block'>
            <AiFillStar color='yellow' size={70} />
            <div className='Sub-Texts'>
              <text style={{fontSize:25, marginBottom: 10, fontWeight:500}}>Live Coaching with the best</text>
              <text>8+ weekly coaching sessions with our Pokercode Coaches. Get direct access to the brightest minds in the game.</text>
            </div>
          </div>
        </div>
        <div className='Home-half2'>

        </div>
      </div>
    </div>
  )
}

export default Home;
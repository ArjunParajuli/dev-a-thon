import React from 'react'
import { MdOutlineQuestionMark } from "react-icons/md";

const Header = () => {
  return (
    <div className='header'>
        
        <h1 className='head-title'>Booking.com</h1>

        <div className='head-second'>
            <button>USD</button>
            <button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAolBMVEX///8AAAAAAAAAAAAAAAD////29vbu7u7Q0ObGxuC9vdu3t9irq9GkpM7xkpyensqamsLugYyUlL7td4Psc3+FhbbraHV9fbHqXGvpV2ZycqroVWTlTV1oaKVmZqNhYaDlQFDgP1BaWpzbNkdSUpXaMULkL0HkLD9NTZPiJzrWKDlKSo/iJDfVIzTiHzPhGy9BQYzhGS09PYU7O4kxMYPOCh8LiCGXAAAABXRSTlMAESIzRJTdRHwAAACiSURBVHjardHbDoIwEEXRtogIeFdEEQXxBgiKWv//1xysU0ioJiau89adzEvJP1EleA/qlogSFnSG1fpvC0ZYNDYdnKOjMphutakw8iHsXMvDeTNh8grW2parn4pXdoSLfGEeQjjZcVcuFPwNhKIYcBzHS+0y9HhVzsJhC+F25xKG4x6CoSsYENLk0pCkEPLs2pDl3049lBihWktBox9/8HdPV8gmGPE7N7gAAAAASUVORK5CYII=" alt="country-logo" /></button>
            <button className='ques'><MdOutlineQuestionMark /></button>
            <button>List Your Property</button>
            <button className='btn-head'>Register</button>
            <button className='btn-head'>Sign in</button>
        </div>

    </div>
  )
}

export default Header
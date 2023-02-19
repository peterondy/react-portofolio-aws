import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ramziben/" target="__blank" title='Linkedin Profile'><BsLinkedin /></a>
        <a href="https://github.com/peterondy" target="__blank" title='Github Profile'><AiOutlineGithub /></a>
        <a href="https://peterondy.github.io/" target="__blank" title='Gitub Static Page'><FaGithubSquare /></a>
        <a href="https://www.upwork.com/freelancers/~018d2cf7cd086a663e" target="__blank" title='Hire Me On Upwork'><SiUpwork /></a>
    </div>
  )
}

export default HeaderSocials

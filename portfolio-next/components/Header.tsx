import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>Header Text
        <div>
            {/* Socials(github, linkedin, share) */}
              <SocialIcon fgColor='grey' bgColor='transparent' url="https://www.linkedin.com/in/chris-stewart-79b283204/" />
              <SocialIcon url="https://github.com/mcstewart76" />
        </div>
    </header>
  )
}
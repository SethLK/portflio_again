import React from 'react'
import Image from 'next/image'

const SocialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/SethLK/',
        icon: '/assets/github.svg', 
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/seth-linn-khant-pau-571151282/',
        icon: '/assets/linkedin.svg',
    },
    {
        name: 'X (Twitter)',
        url: 'https://x.com/SethLK1',
        icon: '/assets/x (twitter).svg',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/seth.khant/',
        icon: '/assets/instagram.svg',
    }, 
]

export default function LeftSide() {
  return (
    <div className='fixed left-0 top-0 h-full flex items-center text-white p-4'>
      <ul className='align-middle'>
        {SocialLinks.map((link) => (
          <li key={link.name} className="mb-4">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400 m-2 ">
            
              <Image src={link.icon} alt={`${link.name} icon`} width={24} height={24} className="mb-4" />
              
            </a>
            </li>
        ))}
      </ul>
    </div>
  )
}

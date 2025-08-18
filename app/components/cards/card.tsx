"use client";

import React from 'react';
import styled from 'styled-components';

type CardProps = {
    title?: string;
    description?: string;
    url?: string;
};

const CardStyle = styled.div`
  width: 300px;
    height: 200px;
    // background-color: var(--accent);

    border-radius: 10px;
    // box-shadow: 0 4px 8px rgba(0, 0,    0, 0.1);
    border: 1px solid var(--accent);
    // display: flex;
    border-color: var(--accent);
    // padding: 20px;  
    // margin: 20px;

    &::before {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    
    /* Animate the overlay */
    &::before {
      opacity: 1;
    }
  }
    `;

export default function Card({ title, description, url }: CardProps) {
    return (
        <div>
            <CardStyle className='m-2 p-4'>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className=" fill-green-900 mb-4 ">{description && description.length > 100 ? description.slice(0, 100) + "..." : description || "No description available"}</p>
                <a href={url} target='_blank'>Click me</a>
            </CardStyle>
        </div>
    );
}

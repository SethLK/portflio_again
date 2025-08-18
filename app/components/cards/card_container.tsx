import React from 'react'
import Card from './card';

export default function CardContainer() {
  return (
      <div className="l flex justify-center items-center">
        {/* <div className="m-2 grid h-56 grid-cols-4 content-start gap-2 "> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
          <Card title="Testing" description="Test" />
          <Card title="Testing" description="Test" />
        </div>
      </div>
  )
}

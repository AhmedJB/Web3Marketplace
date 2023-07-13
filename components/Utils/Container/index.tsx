import React from 'react'

type Props = {
    children : JSX.Element[] | JSX.Element
}

function Container({children}: Props) {
  return (
    <div className="w-full">
        <div className="w-full md:container mx-auto">
                {children}
        </div>
    </div>
  )
}

export default Container
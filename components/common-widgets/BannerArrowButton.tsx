import React, { ReactNode } from 'react'

function BannerArrowButton(props: {icon: ReactNode, action: React.MouseEventHandler<HTMLButtonElement> | undefined}) {
  return (
    <button
    onClick={props.action}
    type="button"
    className="text-white borde bg-gray-600 shadow-md hover:shadow-sm hover:bg-opacity-50 bg-opacity-50 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-full text-lg p-3.5 text-center inline-flex items-center"
  >
    {props.icon}
  </button>
  )
}

export default BannerArrowButton
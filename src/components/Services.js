import React from 'react'

export const Services = ({icon,title,details,ellipse}) => {
    return (
        <div className="flex flex-col bg-white px-8 py-8 my-4 " >
            <div className="flex  space-x-3 pb-4 ">
                <img src={icon} alt="icon" /> <img src={ellipse} alt="ellipse" className='animate-pulse relative right-5 bottom-2' />
                <h3 className="font-medium text-xl">{title}</h3>
            </div>
            <div>
                <p className="text-sm normal desktop-bag3 text-left " >{details}</p>
            </div>
        </div>
    )
}

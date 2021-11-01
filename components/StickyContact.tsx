import React from 'react'

function StickyContact() {
    return (
        <div className="fixed top-0 right-0 md:right-4 w-screen md:w-auto flex justify-center bg-colorMainRed p-1 md:rounded">
            <div className="bg-white p-2 hidden md:block">
                <a href="mailto:h2oplumbingandgasltd@yahoo.co.uk">h2oplumbingandgasltd@yahoo.co.uk</a>
            </div>
            <div className="text-white p-2 font-bold hidden md:block">
                <a href="tel:01623 422 151">
                    01623 422 151
                </a>
            </div>
            <div className="text-white p-2 font-bold text-xl md:text-base">
                <a href="tel:01623 422 151">
                07904 3888 50
                </a>
            </div>          
        </div>
    )
}

export default StickyContact

import React from 'react'

const Counter = () => {
    return (
        <div className='counter'>
            <h1>My Counter</h1>
            <span>120</span>
            <div className="number-container">
                <button>+</button>
                <span>1</span>
                <button>-</button>
            </div>
        </div>
    )
}

export default Counter

import React from 'react'

export default function Transcription(props) {
    const { textElement, setTextElement } = props

    const handleInputChange = (event) => {
        setTextElement(event.target.value)
    }

    return (
        <div>
            <input className="w-full p-2 rounded-xl border-2 border-solid border-blue-300 text-blue-400 placeholder-blue-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400" type="text" value={textElement} onChange={handleInputChange} />
        </div>
    )
}

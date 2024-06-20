import React, { useState } from 'react'

export default function Transcription(props) {
    const { textElement, setTextElement } = props

    const handleInputChange = (event) => {
        setTextElement(event.target.value)
    }

    return (
        <div>
            <input type="text" value={textElement} onChange={handleInputChange} />
        </div>
    )
}

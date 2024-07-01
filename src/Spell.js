import React, { useState, useEffect } from 'react';

const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
};

const Spell = () => {
    const [text, setText] = useState('');
    const [suggestion, setSuggestion] = useState('');

    useEffect(() => {
        const words = text.split(' ');
        for (let word of words) {
            const lowerCaseWord = word.toLowerCase();
            if (customDictionary[lowerCaseWord]) {
                setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
                return;
            }
        }
        setSuggestion('');
    }, [text]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <h1>XSpellCheck</h1>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Type something here..."
            />
            {suggestion && <p>{suggestion}</p>}
        </div>
    );
}

export default Spell
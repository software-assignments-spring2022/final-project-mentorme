import React from 'react';
import '../styles/Suggestion.css';

{/* 
    props that Suggestion component takes:
        - suggestions: a list of objects containing personal information
*/}

const Suggestion = ( {suggestions} ) => {
    return (
        <div className="suggestions">
            {suggestions.map((person) => (
                // each suggestion contaienr
                <div className="suggestion" key={person.id}>
                    {/* name and info container */}
                    <div className="name">
                        <div>{`${person.last_name}, ${person.first_name}`}</div>
                        <div>{`${person.department}, ${person.school}`}</div>
                    </div>
                    {/* score container */}
                    <div className="score">
                        <div>{`${person.score}/5.0`}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Suggestion;
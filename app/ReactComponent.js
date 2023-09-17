//Import React
import React from 'react';

//Create a React component called StudentInfo that returns the following static information:
//Name
//Course Section
//Link to GitHub repo

export default function StudentInfo() {
    return (
        <div>
            <h1>Name: Anton Koulikov </h1>
            <h1>Course Section: CPRG 306 B</h1>
            <h1><a href="https://github.com/Koulant/cprg306-assignments" target="_blank">GitHub</a></h1>
        </div>
    );
}


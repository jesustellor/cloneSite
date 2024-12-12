import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));

// this will not work on react 18 or later
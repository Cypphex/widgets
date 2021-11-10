import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end JavaScript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite among JavaScript developers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const App = () => {
    return (
        <div>
            <Search />
        </div>
    );
};

export default App;
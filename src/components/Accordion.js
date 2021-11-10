import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
    // functional: init
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = index => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const activeClass = index === activeIndex ? 'active' : '';

        return (
            <Fragment key={item.title}>
                <div className={`title ${activeClass}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${activeClass}`}>
                    <p>{item.content}</p>
                </div>
            </Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;
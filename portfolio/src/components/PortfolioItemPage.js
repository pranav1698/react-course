import React from 'react';

const PortfolioItemPage = (props) => {
    return <div>
        <h1>A thing I've done</h1>
        <p>The page is for the item for id of {props.match.params.id}</p>
    </div>
}

export default PortfolioItemPage;
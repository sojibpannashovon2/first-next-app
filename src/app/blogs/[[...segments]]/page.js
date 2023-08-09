import React from 'react';

const SinglePage = ({ params }) => {
    console.log(params.segments)

    const [year, id] = params.segments || [];
    return (
        <div>
            Singlepage year {year || new Date().getFullYear()} for {id}
        </div>
    );
};

export default SinglePage;
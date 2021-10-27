import React from "react";

const Nasa = (props) => {
    // API key from nasa.gov
    const apiKey = 'fakReeRJnXQgtFmRtgBBfjdmtTPy7DYZ9WWUimxo'
    // API URL
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    
    // State to hold api data
    const [apod, setApod] = React.useState(null);
    
    // Function to fetch data
    const getApod = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setApod(data);
    };

    // useEffect to run getApod when component mounts
    React.useEffect(() => {
        getApod();
    });

    // Loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>Night of the picture: {apod.date}</h1>
                <h2>Title: {apod.title}</h2>
                <h3>Owner: {apod.copyright}</h3>
                <img src={apod.url} alt='' />
                <h2>Description: {apod.explanation}</h2>
            </div>
        );
    };

    // Function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    // if apod has data, run the loaded function, otherwise run loading
    return apod ? loaded() : loading();
};

export default Nasa;
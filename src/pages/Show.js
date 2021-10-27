function Show(props) {
    const id = props.match.params.id
    const astro = props.astro
    const astroPic = astro.find(p => p._id === id)

    const removeAstroPic = () => {
        props.deleteAstro(astroPic._id);
        props.history.push('/astrocollection');
    }


    return (
        <div className="astroPic">
            <h1>{astroPic.night}</h1>
            <img src={astroPic.img} alt=''/>
            <h2>{astroPic.description}</h2>
            <button id='delete' onclick={removeAstroPic}>
                Delete picture from collection
            </button>
        </div>
    );
}

export default Show;
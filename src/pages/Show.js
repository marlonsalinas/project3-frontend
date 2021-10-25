function Show(props) {
    const id = props.match.params.id
    const people = props.astro
    const astroPic = astro.find(p => p._id === id)

    return (
        <div className="astropic">
            <h1>{astroPic.night}</h1>
            <img src={astroPic.img} alt=''/>
            <h2>{astroPic.description}</h2>
        </div>
    );
}

export default Show;
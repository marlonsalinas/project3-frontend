import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
    // State to hold formData
    const [ newForm, setNewForm ] = useState({
        night: "",
        img: "",
        description: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // Handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createAstro(newForm);
        setNewForm({
            night: "",
            img: "",
            description: "",
        });
    };

    // loaded function
    const loaded = () => {
        return props.astro.map((astroPic) => (
            <div key={astroPic._id} className='pic'>
                <Link to={`/astrocollection/${astroPic._id}`}><h1>{astroPic.night}</h1></Link>
                <img src={astroPic.img} alt="" />
                <h3>{astroPic.description}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading..</h1>;
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.night}
                    name="night"
                    placeholder="night"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.img}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.description}
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                />
                <input type="submit" value="Add picture to collection" />
            </form>
            {props.pic ? loaded() : loading()} 
        </section>
    );
}

export default Index;
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
            <div key={astroPic._id} className='pic' id='indexList'>
                <Link to={`/astrocollection/${astroPic._id}`}>
                <img src={astroPic.img} alt="" />
                    {/* <h1>{astroPic.night}</h1> */}
                </Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading..</h1>;
    };

    return (
        <section>
            <div class='form-container'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={newForm.night}
                        name="night"
                        placeholder="Night of picture"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={newForm.img}
                        name="img"
                        placeholder="Image URL"
                        onChange={handleChange}
                    />
                    <textarea
                        type="text"
                        value={newForm.description}
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Add picture to collection" />
                </form>
            </div>
            {props.astro ? loaded() : loading()} 
        </section>
    );
}

export default Index;
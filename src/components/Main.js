import { useEffect, useState } from "react";
import { Route, Switch} from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props){
    const [ astro, setAstro ] = useState(null);
    const URL = "https://guarded-oasis-31914.herokuapp.com/astrocollection";
    const getAstro = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setAstro(data);
    };

    const createAstro = async (astroPic) => {
        // post request to create picture entry
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(astroPic),
        });
        // update collection of pictures
        getAstro();

    };

    const updatedAstro = async (astroPic, id) => {
        // make PUT request to create people
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(astroPic),
        });
        // update collection of pictures
        getAstro();
    }

    useEffect(() => getAstro(), []);

    return (
        <main>
            <Switch>
                <Route exact path='/astrocollection'>
                    <Index astro={astro} createAstro={createAstro} />
                </Route>
                <Route
                path='/astrocollection/:id'
                render={(rp) => (
                    <Show
                    astro={astro}
                    updatedAstro={updatedAstro}
                        {...rp}
                    />
                )}
            />
            </Switch>
        </main>
    );
};

export default Main;
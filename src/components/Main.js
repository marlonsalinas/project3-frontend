import { useEffect, useState } from "react";
import { Route, Switch} from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props){
    const [ astro, setAstro ] = useState(null);
    const URL = "https://localhost:3000/astrocollection/";
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

    useEffect(() => getAstro(), []);

    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index astro={astro} createAsto={createAstro} />
                </Route>
                <Route
                path='/astrocollection/:id'
                render={(rp) => (
                    <Show
                        {...rp}
                    />
                )}
            />
            </Switch>
        </main>
    );
};

export default Main;
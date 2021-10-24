import { useEffect, useState } from "react";
import { Route, Switch} from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props){
    const [ pic, setPic ] = useState(null);
    const URL = "https://localhost:3000/astrocollection/";
    const getPic = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPic(data);
    };

    const createPic = async (picture) => {
        // post request to create picture entry
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(picture),
        });
        // update collection of pictures
        getPic();

    };

    useEffect(() => getPic(), []);

    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index pic={pic} createPic={createPic} />
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
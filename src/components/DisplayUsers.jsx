import { useEffect, useState } from "react"
import Card from "./Card";

const DisplayUsers = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> setData(data))
        .finally(()=> {
            setIsLoading(false);
        });
    }, []);

    if(isLoading){
        return <p>Loading.....</p>
    }

    return (
        <div>
            {/* <h1>this is display components</h1> */}
            {
                data.map((user) => (
                    <Card name={user.name} email={user.email}></Card>
                ))
            }
        </div>
    )
}

export default DisplayUsers
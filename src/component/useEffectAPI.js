import React, { useEffect, useState } from 'react';
import '../App.css'

const UseEffectAPI = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        // console.log(response);
        // const data = await response.json();
        // console.log(data);

        setUsers(await response.json());

        if (getUsers !== "jfl") {
            getUsers();
          
        }
        else {
            console.log("api is not connected or valid")
        }
        

    }

    // useEffect(() => {
    //     getUsers();
    // }, [])
    
    return (
        <>
            <h2>List of Github Users</h2>
            <div className="btn"><button onClick={getUsers}>Click me plz</button></div>

            <div className="container-fluid mt-5">
                <div className="row text-center">

                    {
                        users.map((curElem) => {
                            const { url, id, avatar_url, login } = curElem;
                            return (
                                // <div>
                                <div className="col-10 col-md-4 mt-4 " key={id}>
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"><img src={avatar_url} alt="" className="rounded" width="155" /></div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{login}</h4><span className='textLeft'>{url}</span>
                                                <div className="p-2 mt-5 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column"><span className="articles">id</span> <span className="number1">{curElem.id}</span></div>
                                                    <div className="d-flex flex-column"><span className="followers">followers</span> <span className="number2">980</span></div>
                                                    <div className="d-flex flex-column"><span className="rating">following</span> <span className="number3">88</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                // </div>
                            )
                        })
                    }



                </div>


            </div>


        </>
    )
}

export default UseEffectAPI

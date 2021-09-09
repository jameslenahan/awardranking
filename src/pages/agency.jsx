import React, {useEffect, useState} from "react";
import axios from "axios"
import '../App.css'
import NavBar from '../components/NavBar'

const entryURL = "http://127.0.0.1:3000/entries"
const baseURL = "http://127.0.0.1:3000/agencies"

function Agency(){
    const [agency, setAgency] = React.useState(null)
    const [list, agencyList] = React.useState([0, 1])
    const [agencyname, setName] = useState("");
    const [awardlist, awardFetch] = React.useState([0, 1])



    useEffect(() => {
        axios.get(baseURL, {
           
       
        })
        .then((response) => {
            agencyList(response.data)
        }
        )
    }, []);
        
    useEffect(() => {
        axios.get(entryURL, {
           
       
        })
        .then((response) => {
            awardFetch(response.data)
        }
        )
    }, []);
    function createAgency() {
        axios.post(baseURL, {
            name: agencyname,

        })
        .then((response) => {
            setAgency(response.data)
        })
    }
    

        
        
        
 

        


        return (
        
            <html>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>


            <NavBar>
                </NavBar>
            <div>
                    <form onSubmit={createAgency} style={{marginLeft: "10vw", width:"80vw"}}>
                    <div className="field" >
                        <label className="label">Name</label>
                        <div className="control">
                        <input className="input" type="text" placeholder="" 
                        type="text"
                        value={agencyname}
                        onChange={e => setName(e.target.value)}
                        />
                        </div>
                    </div>
                    <div class="buttons">
                        <button class="button is-primary is-dark">
                            Submit
                        </button>
                    </div>

                    </form>
                    </div> 
                    <article className="media" style={{marginLeft:"10vw", marginTop: "5vh"}}>

    {(list).map(element => { return (

    <div className="media-content">
        <div className="content">
        <p>
       
        <br /><strong style={{fontSize: "125%"}}>{element.name}</strong>
            


                
                
        </p>

        </div>
        <nav className="level is-mobile">
        <div className="level-left">
            <a className="level-item">
            <span className="icon is-small"><i className="fas fa-reply" /></span>
            </a>
            <a className="level-item">
            <span className="icon is-small"><i className="fas fa-retweet" /></span>
            </a>
            <a className="level-item">
            <span className="icon is-small"><i className="fas fa-heart" /></span>
            </a>
        </div>
                    </nav>

                </div>

            )})}
                </article>
                <article className="media" style={{marginLeft:"10vw", marginTop: "5vh"}}>

            {(awardlist).map(element => { return (

                <div className="media-content">
                    <div className="content">
                    <p>
                
                    <br /><strong style={{fontSize: "125%"}}>{element.name}</strong>
                        
                        <p>
                        
                    
                                <strong>{element.description}</strong>
                                
                        </p>

                        <p>
                        <p>
                                URL: <strong>{element.url} </strong>
                            </p>
                            <p>
                                Type of Award: <strong>{element.typeofaward} </strong>
                            </p>
                            <p>
                                Cost of Entry: <strong>${element.cost} </strong>
                            </p>
                            Deadline:
                        <strong> {element.deadline}</strong></p>
                            <p>
                                Rating: <strong>{element.rating} </strong>
                            </p>
                            <div class="buttons">
                        <button class="button is-primary is-dark">
                            Add to agency
                        </button>
                    </div>
                            
                            
                    </p>

                    </div>
                    <nav className="level is-mobile">
                    <div className="level-left">
                        <a className="level-item">
                        <span className="icon is-small"><i className="fas fa-reply" /></span>
                        </a>
                        <a className="level-item">
                        <span className="icon is-small"><i className="fas fa-retweet" /></span>
                        </a>
                        <a className="level-item">
                        <span className="icon is-small"><i className="fas fa-heart" /></span>
                        </a>
                    </div>
                    </nav>

                </div>

            )})}
                </article>
                


          
                
                
                </html>     
                
           


)}
  
   
    


export default Agency;

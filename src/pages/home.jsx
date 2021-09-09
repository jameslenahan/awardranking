import React, {useEffect, useState} from "react";
import axios from "axios"
import '../App.css'
import NavBar from '../components/NavBar'
const baseURL = "http://127.0.0.1:3000/entries"
const agencyURL = "http://127.0.0.1:3000/agencies"


function Home(){
    const [entry, setEntry] = React.useState(null)
    const [list, entryList] = React.useState([0, 1])
    const [entryname, setName] = useState("");
    const [entrydescription, setDescription] = useState("");
    const [entrydeadline, setDeadline] = useState("");
    const [entryrating, setRating] = useState("");
    const [entrytype, setType] = useState("");
    const [entrycost, setCost] = useState("");
    const [entryurl, setUrl] = useState("");


        useEffect(() => {
            axios.get(baseURL, {
               
           
            })
            .then((response) => {
                entryList(response.data)
            }
            )
        }, []);
        
        
        
        function createEntry() {
            axios.post(baseURL, {
                name: entryname,
                description: entrydescription,
                deadline: entrydeadline,
                rating: entryrating,
                typeofaward: entrytype,
                cost: entrycost,
                url: entryurl
            })
            .then((response) => {
                setEntry(response.data)
            })
        }
        console.log(list)
    

        
        
        
 

        


        return (
        
            <html>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>
            <NavBar>
                
            </NavBar>
            <section class="hero" style={{marginLeft: "7.5vw"}}>
                <div class="hero-body">
                    <p class="title">
                    Add an Award Show
                    </p>


                </div>

                </section>
                <div>
                    <form onSubmit={createEntry} style={{marginLeft: "10vw", width:"80vw"}}>
                    <div className="field" >
                        <label className="label">Name</label>
                        <div className="control">
                        <input className="input" type="text" placeholder="" 
                        type="text"
                        value={entryname}
                        onChange={e => setName(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">URL</label>
                        <div className="control">
                        <input className="input" type="email" placeholder="" 
                        type="text"
                        value={entryurl}
                         onChange={e => setUrl(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                        <input className="input" type="email" placeholder="" 
                        type="text"
                        value={entrydescription}
                         onChange={e => setDescription(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Type of Award</label>
                        <div className="control">
                        <input className="input" type="email" placeholder="" 
                        type="text"
                        value={entrytype}
                         onChange={e => setType(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Cost of Entry</label>
                        <div className="control">
                        <input className="input" type="email" placeholder="" 
                        type="text"
                        value={entrycost}
                         onChange={e => setCost(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Deadline</label>
                        <div className="control">
                        <input className="input" type="email" placeholder="" 
                        type="text"
                        value={entrydeadline}
                        onChange={e => setDeadline(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Rating</label>
                            <div className="control">
                                <div class="select">
                                    <select  className="input"
                                    value={entryrating}
                                    onChange={e => setRating(e.target.value)}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                              
                                </div>
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
  
   
    


export default Home;


//  //                    {(awarddata).map(element => {
                        
//     return(
//         <h1>
        
//         {(element.score)}

//         </h1>
        

// )})}
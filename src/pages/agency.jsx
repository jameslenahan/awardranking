import React, {useEffect, useState} from "react";
import axios from "axios"
import '../App.css'

const baseURL = "http://127.0.0.1:3000/entries"

function Agency(){
    const [entry, setEntry] = React.useState(null)
    const [list, entryList] = React.useState([0, 1])
    const [entryname, setName] = useState("");
    const [entrydescription, setDescription] = useState("");
    const [entryrating, setRating] = useState("");



    useEffect(() => {
        axios.get(baseURL, {
           
       
        })
        .then((response) => {
            entryList(response.data)
        }
        )
    }, []);
        
    

    

        
        
        
 

        


        return (
        
            <html>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>




 

    
                


                
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
  
   
    


export default Agency;


//  //                    {(awarddata).map(element => {
                        
//     return(
//         <h1>
        
//         {(element.score)}

//         </h1>
        

// )})}
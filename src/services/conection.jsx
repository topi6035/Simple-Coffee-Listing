import React from "react"
import { useState,useEffect } from "react"


function getCoffees() {

    
    let [coffes, setCoffes] = useState([]);

    const apiURLCoffee = `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`
    useEffect(() => {
        console.log("useEffect")
        fetch(apiURLCoffee)
            .then(response => response.json())
                .then(data => { setCoffes(data)})
                    .catch(error => {
                        console.log(error)
        })
      }, []);
      return coffes
}

export default getCoffees;
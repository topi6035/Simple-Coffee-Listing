import getCoffees from '../services/conection'
import Coffee from './cardCoffe';
import './listCoffe.css'
function ListCaffe(available) {

    console.log(available.state)
    const state = available.state
    let coffes
    
    state == true ? coffes = getCoffees().filter((coffee => coffee.available === true)) 
    : coffes = getCoffees()
    console.log(coffes);
    return (
        <div className="list-of-coffes">
            { coffes ? (
                coffes.map(coffee => <Coffee key={coffee.id} data={coffee}/>
            )) : (
                <p>Loading...</p>
              )
            }
        </div>
    );
}

export default ListCaffe
//class based component
import {Component, createContext} from 'react' //"Component" is a calss inside react module
// class App extends Component{
//     render(){
//         return ( // this syntax  "<></>" is called react fragment
//             <>
//             <h1>hello</h1>
//             <h2>hello</h2>
//             </>
//         )
        
//     }//it returns a reactElement (jsx) and cannot returns two tags of jsx
// }

function App(){
    return  ( // this syntax  "<></>" is called react fragment
            <>
            <h1>hello</h1>
            <h2>hello</h2>
            </>
        )
}

export default App

//there are keyshort for easier coding such as 'imrc'(it imports the React and component from react module),"cc"(it creates a class based component),"sfc"(it creates a functional component)


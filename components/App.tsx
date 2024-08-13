
// import { useEffect } from "react"
import { useEffect } from "react"
import Header from "./Header"
import Guitar from "./guitar"
import { useReducer } from "react"
import { cartReducer, initialState } from "../reducers/cart-reducer"


function App() {

 
const [state, dispatch] = useReducer(cartReducer, initialState)
  
useEffect(() =>{
  localStorage.setItem("cart", JSON.stringify(state.cart))
}, [state.cart])

 return (
    <>
<Header
   cart={state?.cart}
   dispatch={dispatch}/>

      <main className="container-xl mt-5 bg-black">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {state?.data.map((guitar) => (
            <Guitar 
              key={guitar.id}
              guitar={guitar}
              dispatch={dispatch}
              
           />
          ))}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

export default App

//State
//  const [auth, setAuth] = useState(false)
// const [total, setTotal] = useState(0)
// const [cart, setCart] = useState([])
//Effect

// useEffect(() =>{
//  if(auth){
//   console.log("Autenticado")
//  } 
// },[auth])
//   setTimeout(() =>{ 
// setAuth(true)
//   },3000);


// usar el Effect para las apis
// useEffect(() =>{
//   setData(db)
// },[])

// usar el Effect para las apis
// useEffect(() =>{
//   setData(db)
// },[])
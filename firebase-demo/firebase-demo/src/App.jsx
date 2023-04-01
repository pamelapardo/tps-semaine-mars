import { useEffect } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { database } from './firebase/firebase';

function App() {
  useEffect(() => {
    //Code à executer (fonction)
    // getCharizard()
    addDocument()
  },
    // Second parametre : un tableau de dependances
    []
  )

  const {myPanier} = useContext(CartContext)

  async function addDocument(){
    try {
      const docRef = await addDoc(collection(database, 'second test'), {myPanier});
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  // const addDocument = async () => {
  //   try {
  //     const docRef = await addDoc(collection(database, "achats"), {
  //       name: "Ada",
  //       quantite: 3,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }
  // const getCharizard = async () => {
  //   // Ici on aurait placé le code avec fetch de là-haut, mais on l'a reemplacé
  //   // par ces const dessous
  //   const httpReponse = await fetch('https://pokeapi.co/api/v2/pokemon/charizard')
  //   const charizard = await httpReponse.json();
  //   console.log('charizard: ', charizard)
  // }
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

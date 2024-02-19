import { Route, Routes } from "react-router-dom"
import MainPages from "./pages/MainPages"
import CharacterPage from "./pages/CharacterPage"

function App(){
  return (
    <Routes>
      <Route path="/" element={<MainPages/>}/>
      <Route path="character/:id" element={<CharacterPage/>}/>
    </Routes>
  )
}

export default App
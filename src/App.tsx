
import FunctionContextComponent from "./FunctionContextComponent"
import './App.css'
import { ThemeProvider } from './ThemeContext'



export default  function App() {
  return (
      <ThemeProvider>
        <FunctionContextComponent/>
      </ThemeProvider>
  )
}



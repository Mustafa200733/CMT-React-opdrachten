import './App.css'
import Nav from './components/Nav'
function App() {


  return (
    
    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg px-15 py-10 ring shadow-x1 ring-black-900/50">
   <h1 className='text-black-900   text-base font-medium tracking-tight '  >Workcation</h1> 
<br />
   <img  class="float-left ..."   src="huisje.png" alt="" /> 
  <br />
  <br />
  <br />
  <img   src="/public/Schermafbeelding 2025-11-25 191733.png" alt="" />
  
  <h1 class="  text-black-900  mt-10 text-base font-medium tracking-tight ">You can work from <br />
   anywhere. Take <br />
   advantage of it.</h1>
   <br />
  <p class=" text-black-500 dark:text-gray-400 mt-2 text-sm ">
    Workcation helps you find work-friendly <br />
    rentals in beautifl locations so you can en <br />
    joy some nice weather even when you're  <br />
    nog on vacation.
  </p>
  <br />
    <button className="text-white inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg ">
     &nbsp; BOOK YOUR ESCAPE &nbsp;
    </button>
</div>
  )
}

export default App

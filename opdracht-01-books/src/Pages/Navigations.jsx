import { Link, Outlet } from 'react-router-dom';
 const Navigations = () => {
     return ( 
     <div> 
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Over Ons</Link></li> 
            <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Outlet /> 
          </div>
           );
           };
            export default Navigations;
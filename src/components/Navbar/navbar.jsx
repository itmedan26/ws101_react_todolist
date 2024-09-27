import './navbar.css';

function Navbar (props)  {
    return (
        <div className='Navbar'>
            <h1>This Navigation Bar</h1>
            <h3>My name is {props.name}{props.lastname}</h3>
        </div>
    );
}

export default Navbar;
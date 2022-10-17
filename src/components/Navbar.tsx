import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar(){
    const { openCart, cartQuantity } = useShoppingCart()
    return <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link to={"/"} as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to={"/store"} as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to={"/about"} as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            {cartQuantity > 0 && (<Button
                onClick={openCart} 
                style={{ width: "3rem", height: "3rem", position: "relative" }} 
                variant="outline-primary"
                className="rounded-circle"
                >
                    
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                
                <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                <path d="M39 32H13L8 12H44L39 32Z" fill="#2F88FF"/>
                <path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="13" cy="39" r="3" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="39" cy="39" r="3" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
           
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)", }}> 
            {cartQuantity}
                </div>
            </Button>)}
        </Container>
    </NavbarBs>
}
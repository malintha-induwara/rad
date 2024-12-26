import {Link} from "react-router";

export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul style={{listStyleType: 'none' , display:'flex', gap: '10px',fontSize:'20px'}} >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add"> Add </Link></li>
                        <li><Link to="/update"> Update </Link></li>
                        <li><Link to="/delete"> Delete </Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
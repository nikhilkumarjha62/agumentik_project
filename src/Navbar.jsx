import "./Navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
      <div className="logo">
        <h1><span>PLANTS</span></h1>
      </div>
      
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#product">Products</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
        <li><a className="Search"  >
        <button>
        <img src="https://cdn-icons-png.flaticon.com/512/108/108138.png?w=740&t=st=1690702016~exp=1690702616~hmac=fe983340ce7082752f47df6030b7fe3203aff97311297b410dc119d525218fd7" alt="Search" /></button> 
      </a></li>
        <li><a className="cart" href="/">
        <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png?w=740&t=st=1690701460~exp=1690702060~hmac=2f5d19adc418f5a7eb39ef7c509b9e5402630289ec81a405446f88af10c1b0ae" alt="cart" /> 
      </a></li>
      <li><a className="profile"  href="/">
        <img src="https://cdn-icons-png.flaticon.com/512/44/44948.png?w=740&t=st=1690701162~exp=1690701762~hmac=a6b796caa6af6a73b3f06eea8c4b1ac6b3bb415dfa9536d32c5d219f4f770b9e" alt="Profile" /> 
      </a></li>
      </ul>
    </nav>
    );
}
export default Navbar;
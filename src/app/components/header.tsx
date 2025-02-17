import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Header(){
    return (
      <div className="bg-purple-600 w-screen text-white flex justify-between items-center px-5 py-1">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1" >
          <i className="fas fa-envelope" />
          <span><b>konain611@gmail.com</b></span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fas fa-phone" />
          <span><b>+92 3333368339</b></span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <span>English</span>
          <i className="fas fa-chevron-down" />
        </div>
        <div className="flex items-center space-x-1">
          <span>USD</span>
          <i className="fas fa-chevron-down" />
        </div>
        <div className="flex items-center space-x-1">
          <i className="fas fa-user" />
          <span>Login</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fas fa-heart" />
          <span>Wishlist</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fas fa-shopping-cart" />
        </div>
      </div>
    </div>
    
    )
  }
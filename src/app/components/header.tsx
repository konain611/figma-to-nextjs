import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Header(){
    return (
      <div className="bg-purple-600 w-screen text-white flex justify-between items-center px-5 py-1">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1" >
          <i className="fas fa-envelope" />
          <span>mhhasanul@gmail.com</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fas fa-phone" />
          <span>(12345)67890</span>
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

const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; Copyright by <span className="font-bold">Fadli Sileuw</span>
        </p>
        <div className="social-footer flex items-center sm:gap-7 gap-2">
          <i className="ri-whatsapp-fill text-2xl"></i>
          <a href="https://linkedin.com/in/fadlisileuw" className="ri-linkedin-fill text-2xl"></a>
          <a href="https://www.instagram.com/fadli305" className="ri-instagram-fill text-2xl"></a>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
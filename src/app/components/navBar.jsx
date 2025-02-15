function NavBar() {
    return (
      <div className="navbar">
        <h3>Panaderia Doña Pepa</h3>
        <ul>
          <li><FontAwesomeIcon icon={faHome} />Home</li>
          <li><FontAwesomeIcon icon={faBox} />Productos</li>
          <li><FontAwesomeIcon icon={faPhone} />Contacto</li>
          <li><FontAwesomeIcon icon={faShoppingCart} />Carrito</li>
          <li><FontAwesomeIcon icon={faDoorOpen} />Salir</li>
        </ul>
      </div>
    );
  }
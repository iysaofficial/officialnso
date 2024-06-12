import React, { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const hamBurgerRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const hamBurger = hamBurgerRef.current;
    if (hamBurger) {
      const handleClick = () => {
        document.querySelector("#sidebar").classList.toggle("expand");
        setIsSidebarOpen(!isSidebarOpen);
      };
      hamBurger.addEventListener("click", handleClick);
      // Cleanup function to remove event listener when component unmounts
      return () => {
        hamBurger.removeEventListener("click", handleClick);
      };
    }
  }, [isSidebarOpen]);

  return (
    <>
      <section className="Navbar-section">
        <div className="wrapper">
          <aside id="sidebar">
            <div className="d-flex">
              <button className="toggle-btn" type="button" ref={hamBurgerRef}>
                <a className="me-2">Menu</a>
                <i
                  className={
                    isSidebarOpen ? "lni lni-close" : "lni lni-grid-alt"
                  }
                ></i>
              </button>
            </div>
            <ul className="sidebar-nav">
              <li className="sidebar-item">
                <a href="/" className="sidebar-link mt-5">
                  <i className="lni lni-home"></i>
                  <span>Beranda</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  href="https://drive.google.com/file/d/1hKvIrelIvMSA3ouMYYVfDhkcLdyfUBDf/view?usp=sharing"
                  target="_blank"
                  className="sidebar-link"
                >
                  <i className="lni lni-book"></i>
                  <span>Buku Panduan</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="/faq" className="sidebar-link">
                  <i className="lni lni-question-circle"></i>
                  <span>FAQ</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="/contact" className="sidebar-link">
                  <i className="lni lni-phone"></i>
                  <span>Kontak</span>
                </a>
              </li>
            </ul>
            <div className="sidebar-footer">
              <img
                className="img-fluid p-5"
                src="./assets/logo/NSO.png"
                alt=""
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Navigation;

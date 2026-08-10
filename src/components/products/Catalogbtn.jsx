import React from "react";
import "../../style/products/catalogbtn.css";
import catalog from "../../assets/catalog/catalog.pdf";

const Catalogbtn = () => {
    const openCatalog = () => {
        window.open(catalog, "_blank");
    };

  return (
    <div className="catalog-btn-container">
      <button className="catalog-btn" onClick={openCatalog}>
        Download Catalog
      </button>
    </div>
  );
};

export default Catalogbtn;
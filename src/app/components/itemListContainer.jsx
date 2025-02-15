import React from "react";

export const ItemListContainer = () => {
    return (
        <div className="itemListContainer">
        <ProductsCard
            title="Pan de Campo"
            description="Pan casero"
            price="$ 2.500"
            image="../img/pan (1).jpg"
            alt="pan casero de campo"
        />
        <ProductsCard
            title="Medialunas"
            description="medialunas de manteca"
            price="$ 3.500"
            image="../img/medialunas (1).jpg"
            alt="medialunas"
        />
        <ProductsCard
            title="Tartas de Frutas"
            description="tartas"
            price="$ 7.500"
            image="../img/tartas (1).jpg"
            alt="tartas de frutas"
        />
        <ProductsCard
            title="Tortas de Cumpleaños"
            description="Tortas"
            price="$ 15.000"
            image="../img/torta (1).jpg"
            alt="tortas de cumpleaños"
        />
        </div>
    );
};

export default ItemListContainer;
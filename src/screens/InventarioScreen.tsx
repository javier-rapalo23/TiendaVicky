import React, { useState } from "react";
import { styles , inventarioStyles} from "../styles/style";
interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const InventoryPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Producto A", quantity: 10, price: 50 },
    { id: 2, name: "Producto B", quantity: 5, price: 30 },
    { id: 3, name: "Producto C", quantity: 20, price: 100 },
  ]);

  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    name: "",
    quantity: 0,
    price: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = (): void => {
    if (newProduct.name && newProduct.quantity && newProduct.price) {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          name: newProduct.name,
          quantity: Number(newProduct.quantity),
          price: Number(newProduct.price),
        },
      ]);
      setNewProduct({ name: "", quantity: 0, price: 0 });
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={inventarioStyles.title}>Gestión de Inventario</h1>
      <div style={styles.rowContainer}>
      <div style={inventarioStyles.form}>
        <h2 style={inventarioStyles.subtitle}>Agregar Nuevo Producto</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={handleInputChange}
          style={inventarioStyles.input}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Cantidad"
          value={newProduct.quantity}
          onChange={handleInputChange}
          style={inventarioStyles.input}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={newProduct.price}
          onChange={handleInputChange}
          style={inventarioStyles.input}
        />
        <button onClick={addProduct} style={inventarioStyles.button}>
          Agregar Producto
        </button>
      </div>

      <div style={inventarioStyles.tableContainer}>
        <h2 style={inventarioStyles.subtitle}>Inventario Actual</h2>
        <table style={inventarioStyles.table}>
          <thead>
            <tr>
              <th style={inventarioStyles.th}>ID</th>
              <th style={inventarioStyles.th}>Producto</th>
              <th style={inventarioStyles.th}>Cantidad</th>
              <th style={inventarioStyles.th}>Precio</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={inventarioStyles.td}>{product.id}</td>
                <td style={inventarioStyles.td}>{product.name}</td>
                <td style={inventarioStyles.td}>{product.quantity}</td>
                <td style={inventarioStyles.td}>${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};



export default InventoryPage;

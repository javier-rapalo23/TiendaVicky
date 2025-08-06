import React, { useState } from "react";
import { styles } from "../styles/style";

interface Item {
  name: string;
  price: number;
  quantity: number;
}

const FacturacionScreen: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>({ name: "", price: 0, quantity: 1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: name === "name" ? value : Number(value) });
  };

  const addItem = () => {
    if (newItem.name && newItem.price > 0 && newItem.quantity > 0) {
      setItems([...items, newItem]);
      setNewItem({ name: "", price: 0, quantity: 1 });
    }
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ ...styles.page, minHeight: "100vh", paddingTop: "90px" }}>
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 16px #43c6ac22", maxWidth: 400, margin: "32px auto", padding: 32 }}>
        <h1 style={{ fontSize: "2rem", color: "#43c6ac", fontWeight: 700, marginBottom: 24 }}>Facturación</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            type="text"
            name="name"
            placeholder="Nombre del producto"
            value={newItem.name}
            onChange={handleChange}
            style={{ padding: "10px", borderRadius: 8, border: "1px solid #e0eafc", marginBottom: 8 }}
          />
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={newItem.price}
            onChange={handleChange}
            style={{ padding: "10px", borderRadius: 8, border: "1px solid #e0eafc", marginBottom: 8 }}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Cantidad"
            value={newItem.quantity}
            onChange={handleChange}
            style={{ padding: "10px", borderRadius: 8, border: "1px solid #e0eafc", marginBottom: 8 }}
          />
          <button onClick={addItem} style={{ background: "linear-gradient(90deg, #43c6ac 0%, #191654 100%)", color: "#fff", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 600, cursor: "pointer", fontSize: "1.1rem" }}>
            Agregar producto
          </button>
        </div>
        {items.length > 0 && (
          <div style={{ marginTop: 32 }}>
            <h2 style={{ color: "#191654", fontSize: "1.3rem", marginBottom: 12 }}>Resumen</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "8px", color: "#43c6ac" }}>Producto</th>
                  <th style={{ textAlign: "right", padding: "8px", color: "#43c6ac" }}>Precio</th>
                  <th style={{ textAlign: "right", padding: "8px", color: "#43c6ac" }}>Cantidad</th>
                  <th style={{ textAlign: "right", padding: "8px", color: "#43c6ac" }}>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: "8px" }}>{item.name}</td>
                    <td style={{ padding: "8px", textAlign: "right" }}>${item.price.toFixed(2)}</td>
                    <td style={{ padding: "8px", textAlign: "right" }}>{item.quantity}</td>
                    <td style={{ padding: "8px", textAlign: "right" }}>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ textAlign: "right", marginTop: 16, fontWeight: 700, fontSize: "1.2rem", color: "#43c6ac" }}>
              Total: ${total.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacturacionScreen;

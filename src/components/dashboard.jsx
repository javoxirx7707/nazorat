import React, { useState } from 'react';

const productsData = [
  {
    id: 1,
    name: 'Maggi',
    buyingPrice: 430,
    quantity: 43,
    unit: 'Packets',
    threshold: 12,
    expiry: '11/12/23',
    availability: 'In-stock',
    category: 'Instant food',
    productId: '456567',
    image: 'https://via.placeholder.com/120x120?text=Maggi',
    supplier: 'Ronald Martin',
    contact: '98765 43210',
    openingStock: 40,
    remaining: 34,
    onTheWay: 15,
    thresholdValue: 12,
  },
  {
    id: 2,
    name: 'Bisu',
    buyingPrice: 257,
    quantity: 22,
    unit: 'Packets',
    threshold: 12,
    expiry: '21/12/23',
    availability: 'Out of stock',
  },
  {
    id: 3,
    name: 'Red Bull',
    buyingPrice: 405,
    quantity: 36,
    unit: 'Packets',
    threshold: 10,
    expiry: '5/12/23',
    availability: 'In-stock',
  },
  {
    id: 4,
    name: 'Bourn Vita',
    buyingPrice: 502,
    quantity: 14,
    unit: 'Packets',
    threshold: 8,
    expiry: '7/12/23',
    availability: 'Out of stock',
  },
  {
    id: 5,
    name: 'Harlicks',
    buyingPrice: 530,
    quantity: 6,
    unit: 'Packets',
    threshold: 5,
    expiry: '4/12/23',
    availability: 'In-stock',
  },
  {
    id: 6,
    name: 'Harpic',
    buyingPrice: 525,
    quantity: 50,
    unit: 'Packets',
    threshold: 5,
    expiry: '9/12/23',
    availability: 'In-stock',
  },
  {
    id: 7,
    name: 'Ariel',
    buyingPrice: 408,
    quantity: 23,
    unit: 'Packets',
    threshold: 7,
    expiry: '15/12/23',
    availability: 'Out of stock',
  },
  {
    id: 8,
    name: 'Scotch Brite',
    buyingPrice: 359,
    quantity: 43,
    unit: 'Packets',
    threshold: 8,
    expiry: '6/12/23',
    availability: 'In-stock',
  },
  {
    id: 9,
    name: 'Coca cola',
    buyingPrice: 205,
    quantity: 41,
    unit: 'Packets',
    threshold: 10,
    expiry: '11/12/23',
    availability: 'Low stock',
  },
];
echo "# nazorat" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/javoxirx7707/nazorat.git
git push -u origin main
const Dashboard = () => {
  const [view, setView] = useState('list');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setView('detail');
  };

  const handleAddProduct = () => {
    setShowAddForm(true);
  };

  const closeAddForm = () => {
    setShowAddForm(false);
  };

  const Sidebar = () => (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-icon">K</span>
        <span>KANBAN</span>
      </div>
      <nav>
        <a href="#" className="nav-item">
          <span>📊</span> Dashboard
        </a>
        <a href="#" className="nav-item active">
          <span>📦</span> Inventory
        </a>
        <a href="#" className="nav-item">
          <span>📈</span> Reports
        </a>
        <a href="#" className="nav-item">
          <span>👥</span> Suppliers
        </a>
        <a href="#" className="nav-item">
          <span>🛒</span> Orders
        </a>
        <a href="#" className="nav-item">
          <span>🏪</span> Manage Store
        </a>
      </nav>
      <div className="sidebar-bottom">
        <a href="#" className="nav-item">
          <span>⚙️</span> Settings
        </a>
        <a href="#" className="nav-item">
          <span>🚪</span> Log Out
        </a>
      </div>
    </aside>
  );

  const Header = () => (
    <header className="header">
      <div className="search-box">
        <input type="text" placeholder="Search product, supplier, order" />
      </div>
      <div className="user-avatar">👤</div>
    </header>
  );

  const ListView = () => (
    <div className="content">
      <h1 className="page-title">Overall Inventory</h1>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Categories</div>
          <div className="stat-value">14</div>
          <div className="stat-sub">Last 7 days</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Products</div>
          <div className="stat-value">868</div>
          <div className="stat-sub">Last 7 days · ₹25000</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Top Selling</div>
          <div className="stat-value">5</div>
          <div className="stat-sub">Last 7 days · ₹25000</div>
        </div>
        <div className="stat-card low">
          <div className="stat-label">Low Stocks</div>
          <div className="stat-value">12</div>
          <div className="stat-sub">Ordered · 2</div>
        </div>
      </div>

      <div className="table-header">
        <h2>Products</h2>
        <div className="table-actions">
          <button className="btn-primary" onClick={handleAddProduct}>
            Add Product
          </button>
          <button className="btn-outline">Filters</button>
          <button className="btn-outline">Download all</button>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Buying Price</th>
              <th>Quantity</th>
              <th>Threshold Value</th>
              <th>Expiry Date</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((p) => (
              <tr key={p.id} onClick={() => handleProductClick(p)}>
                <td className="product-name">{p.name}</td>
                <td>₹{p.buyingPrice}</td>
                <td>
                  {p.quantity} {p.unit}
                </td>
                <td>
                  {p.threshold} {p.unit}
                </td>
                <td>{p.expiry}</td>
                <td>
                  <span
                    className={`badge ${
                      p.availability === 'In-stock'
                        ? 'green'
                        : p.availability === 'Low stock'
                        ? 'orange'
                        : 'red'
                    }`}
                  >
                    {p.availability}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="btn-outline">Previous</button>
        <span>Page 1 of 10</span>
        <button className="btn-outline">Next</button>
      </div>
    </div>
  );

  const AddProductForm = () => (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>New Product</h2>
          <button className="close-btn" onClick={closeAddForm}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          <div className="image-upload">
            <div className="upload-box">
              <span>📷</span>
              <p>Browse Images</p>
            </div>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" placeholder="Enter product name" />
            </div>
            <div className="form-group">
              <label>Product ID</label>
              <input type="text" placeholder="Enter product ID" />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select>
                <option>Select product category</option>
                <option>Instant food</option>
                <option>Beverages</option>
                <option>Cleaning</option>
              </select>
            </div>
            <div className="form-group">
              <label>Buying Price</label>
              <input type="number" placeholder="Enter buying price" />
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input type="number" placeholder="Enter product quantity" />
            </div>
            <div className="form-group">
              <label>Unit</label>
              <input type="text" placeholder="Packets" />
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Threshold Value</label>
              <input type="number" placeholder="Enter threshold value" />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-outline" onClick={closeAddForm}>
            Discard
          </button>
          <button className="btn-primary">Add Product</button>
        </div>
      </div>
    </div>
  );

  const DetailView = () => {
    if (!selectedProduct) return null;
    const p = selectedProduct;

    return (
      <div className="content">
        <div className="detail-header">
          <button className="back-btn" onClick={() => setView('list')}>
            ← Back
          </button>
          <h1>{p.name}</h1>
          <div className="detail-actions">
            <button className="btn-outline">Edit</button>
            <button className="btn-outline">Download</button>
          </div>
        </div>

        <div className="tabs">
          <button className="tab active">Overview</button>
          <button className="tab">Purchases</button>
          <button className="tab">Adjustments</button>
          <button className="tab">History</button>
        </div>

        <div className="detail-grid">
          <div className="detail-card">
            <h3>Primary Details</h3>
            <div className="detail-row">
              <span>Product name</span>
              <strong>{p.name}</strong>
            </div>
            <div className="detail-row">
              <span>Product ID</span>
              <strong>{p.productId || '456567'}</strong>
            </div>
            <div className="detail-row">
              <span>Product category</span>
              <strong>{p.category || 'Instant food'}</strong>
            </div>
            <div className="detail-row">
              <span>Expiry Date</span>
              <strong>{p.expiry}</strong>
            </div>
            <div className="detail-row">
              <span>Threshold Value</span>
              <strong>
                {p.threshold} {p.unit}
              </strong>
            </div>
          </div>

          <div className="detail-card image-card">
            <img
              src={p.image || 'https://via.placeholder.com/180x180?text=Product'}
              alt={p.name}
            />
          </div>

          <div className="detail-card">
            <h3>Supplier Details</h3>
            <div className="detail-row">
              <span>Supplier name</span>
              <strong>{p.supplier || 'Ronald Martin'}</strong>
            </div>
            <div className="detail-row">
              <span>Contact Number</span>
              <strong>{p.contact || '98765 43210'}</strong>
            </div>
          </div>

          <div className="detail-card">
            <h3>Stock Locations</h3>
            <div className="stock-info">
              <div>
                <span>Store Name</span>
                <strong>Sulur Branch</strong>
              </div>
              <div>
                <span>Stock in hand</span>
                <strong>15</strong>
              </div>
            </div>
            <div className="stock-info">
              <div>
                <span></span>
                <strong>Singanallur Branch</strong>
              </div>
              <div>
                <span></span>
                <strong>19</strong>
              </div>
            </div>
          </div>

          <div className="detail-card stock-summary">
            <div className="stock-item">
              <span>Opening Stock</span>
              <strong>{p.openingStock || 40}</strong>
            </div>
            <div className="stock-item">
              <span>Remaining Stock</span>
              <strong>{p.remaining || 34}</strong>
            </div>
            <div className="stock-item">
              <span>On the way</span>
              <strong>{p.onTheWay || 15}</strong>
            </div>
            <div className="stock-item">
              <span>Threshold value</span>
              <strong>{p.thresholdValue || 12}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main">
        <Header />
        {view === 'list' && <ListView />}
        {view === 'detail' && <DetailView />}
        {showAddForm && <AddProductForm />}
      </div>
    </div>
  );
};

export default Dashboard;
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/add";
import DataTable from "../../components/dataTable/dataTable";
import "./products.scss";
import { useState } from "react";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "noavatar.png"} />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "CreatedAt",
    type: "string",
    width: 200,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add setOpen={setOpen} slug="product" columns={columns} />}
    </div>
  );
};

export default Products;

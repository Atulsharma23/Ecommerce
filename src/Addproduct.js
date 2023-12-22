import Header from "./Header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Addproduct(
) {
  const [name, setName] = useState("");
  const [photoupload, setPhotoupload] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function addproduct() {
    console.log("Submitting product:", name, photoupload, price, description);
    const data = {
      name: name,
      photoupload: photoupload.name,
      price: price,
      description: description,
    };

    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "http://localhost:3001/addproduct",
        data
      );

      if (response.status !== 201) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Server response:", response.data);
      alert("Product Added Successfully");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please check the console for details.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Addproduct Page</h1>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="file"
          onChange={(e) => setPhotoupload(e.target.files[0])}
          className="form-control"
        />
        <br />
        <input
          type="text"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
        />
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
            
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>{" "}
        <br />
        <Button onClick={addproduct} disabled={isSubmitting}>
          {isSubmitting ? "Adding Product..." : "Add Product"}
        </Button>
      </div>
    </>
  );
}

export default Addproduct;

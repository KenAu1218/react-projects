import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    console.log(list);
    if (list) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  };

  const [name, setName] = useState("");
  const [alert, setAlert] = useState({ show: false, text: "", type: "" });
  const [items, setItems] = useState(getLocalStorage());
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setAlert({
        show: true,
        text: "Please enter data",
        type: "danger",
      });
    } else if (name && edit) {
      setItems(
        items.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setEdit(false);
      setAlert({
        show: true,
        text: "data edit successfully",
        type: "success",
      });

      // showAlert(true, "success", "value changed");
      // console.log("fef");
      // setItems(
      //   items.map((item) => {
      //     if (item.id === editID) {
      //       return { ...item, title: name };
      //     }

      //     return item;
      //   })
      // );

      // setName("");

      // setEdit(false);
    } else {
      setAlert({
        show: true,
        text: "data input successfully",
        type: "success",
      });
      console.log(alert);
      setName("");
      setItems([
        ...items,
        { title: name, id: new Date().getTime().toString() },
      ]);
      console.log("hello world");
    }
  };

  const removeItem = (id) => {
    const data = items.filter((item) => {
      return item.id != id;
    });

    setItems(data);

    setAlert({ show: true, text: "remove success", type: "danger" });
  };

  const editItem = (id) => {
    setEdit(true);
    const thatItem = items.find((item) => {
      return item.id == id;
    });

    setName(thatItem.title);
    setEditID(thatItem.id);
  };

  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <section className="section-center form-control">
        {alert.show > 0 && <Alert {...alert}></Alert>}
        <div className="grocery-container">
          <form onSubmit={handleSubmit}>
            <h3>Grocery Bud</h3>
            <label>
              {" "}
              <input
                type="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="eg. egg"
              />
              {edit ? (
                <button className="submit-btn ">edit</button>
              ) : (
                <button className="submit-btn ">submit</button>
              )}
            </label>
          </form>{" "}
        </div>
        <div>
          {items.length > 0 && (
            <List
              items={items}
              editItem={editItem}
              removeItem={removeItem}
            ></List>
          )}
        </div>
        <button onClick={removeAll}>Clear Items</button>
      </section>
    </>
  );
}

export default App;

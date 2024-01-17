import React, { useEffect, useState } from "react";
import CRUD from "./CRUD";

const FuctionCRUD = () => {
  const [creat, setCreat] = useState([]);
  const [creatTodo, setCreatTodo] = useState("");
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  //* creat
  const CreatFunc = (e) => {
    e.preventDefault();
    setCreat([
      ...creat,
      {
        title: creatTodo,
        id: Date.now(),
      },
    ]);
    setCreatTodo("");
  };

  useEffect(() => {
    const data = localStorage.getItem("creat");
    setCreat(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("creat", JSON.stringify(creat));
  }, [creat]);

  //* delete
  const DeleteFunc = (id) => {
    const delet = creat.filter((elem) => elem.id !== id);
    setCreat(delet);
  };

  //* edit
  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  const saveEditTodo = (id) => {
    const newTodo = creat.map((elem) => {
      if (elem.id === id) {
        elem.title = value;
      }
      return elem;
    });
    setCreat(newTodo);
    setEdit(null);
  };

  return (
    <div>
      <CRUD
        CreatFunc={CreatFunc}
        setCreatTodo={setCreatTodo}
        creatTodo={creatTodo}
        creat={creat}
        DeleteFunc={DeleteFunc}
        editTodo={editTodo}
        saveEditTodo={saveEditTodo}
        value={value}
        setValue={setValue}
        edit={edit}
      />
    </div>
  );
};

export default FuctionCRUD;

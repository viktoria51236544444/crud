import React from "react";

const CRUD = ({
  CreatFunc,
  setCreatTodo,
  creatTodo,
  creat,
  DeleteFunc,
  editTodo,
  saveEditTodo,
  value,
  setValue,
  edit,
}) => {
  return (
    <div className="container">
      <h1>Введите данные</h1>
      <div>
        <form onSubmit={CreatFunc}>
          <input
            onChange={(e) => setCreatTodo(e.target.value)}
            value={creatTodo}
            type="text"
            className="input"
          />
        </form>
      </div>

      <ul>
        {creat.map((elem) => (
          <li key={elem.id} className="li">
            {elem.id === edit ? (
              <div>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={() => saveEditTodo(elem.id)}>Save</button>
              </div>
            ) : (
              <>
                {elem.title}
                <div className="button1">
                  <button
                    onClick={() => DeleteFunc(elem.id)}
                    className="button"
                  >
                    delete
                  </button>
                  <button
                    onClick={() => editTodo(elem.id, elem.title)}
                    className="button"
                  >
                    edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUD;

import React, { useState, useEffect } from "react";

function List({ handleChoise }) {
  const [name, setNames] = useState([])
  const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          response.json()
            .then(data => {
              setNames(data)
            })
        }
      })
      .catch(function (error) {
        console.error(error);
      })
  }, []);

  let listItems = name.map(function (elem) {
    return <>
      <li key={elem.id} className="elem" onClick={() => handleChoise(elem)}>
        {elem.name}
      </li>
    </>
  }
  );
  return (
    <div className="column">
      <ul className="elemList">
        {listItems}
      </ul>
    </div>
  )
}
export default List
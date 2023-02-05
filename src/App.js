import React, { useState, useEffect } from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

function App() {
  const [info, setInfo] = useState({ id: null })
  const [data, setData] = useState({ id: null })
  const [isLoading, setLoading] = useState(false);

  function handleChoise(id) {
    setInfo({ id })
  }

  useEffect(() => {
    if (data.id) {
      setLoading(false)
    } else {
      setLoading(true)
    }

    if (info.id) {

      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id.id}.json`)
        .then(response => {
          if (response.ok) {
            response.json()
              .then(d => {
                setData({ id: d }) 
              })
          }
        })
        .then(setInfo({ id: 0 }))
        .then(setLoading(false))
        .catch(function (error) {
          console.log(error);
        })
      if ((data.id !== null) && (data.id.id !== info.id.id)) {
        setData({ id: null })
      }

    }
  }, [info.id, data]);



  return (
    <div className="App">
      <List handleChoise={handleChoise} />
      {isLoading && <p>Загрузка...</p>}
      {data.id !== null ? <Details data={data.id} /> : null}
    </div>
  );
}

export default App;

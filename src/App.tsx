import { useState } from 'react';
import './App.css';
import { Form, Data } from './components/Form/form';
import { Joke } from './components/Joke/joke';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import sourceOfJokes from './source/jokes-data';
import { JokeStructure } from './source/joke-model';

function App() {
  const [userName, setUserName] = useState('');
  const [jokesData, setJokesData] = useState<JokeStructure[]>([]);

  // const fetchData = async (type: string, count: number) => {
  //   const resp = await fetch(`https://official-joke-api.appspot.com/jokes/${type}/ten`)
  //   const data = await resp.json();
  //   setJokesData(data.slice(0, count));
  // };

  const generateJokesData = (
    type: string,
    count: number,
    source: JokeStructure[],
  ) => {
    const data = [...source];
    setJokesData(
      data
        .filter((item) => item.type === type)
        .map((item, index) => ({ ...item, id: index }))
        .slice(0, count),
    );
  };

  const handleSendData = (data: Data) => {
    setUserName(data.name);
    // fetchData(data.type, data.count);
    generateJokesData(data.type, data.count, sourceOfJokes);
  };

  return (
    <div className="app">
      {jokesData.length > 0 ? (
        <div className="app__container">
          <h2>{userName}</h2>
          <h3>There are jokes for you!</h3>
          {jokesData.map((item, index) => (
            <Joke
              key={index}
              setup={item.setup}
              punchline={item.punchline}
              showRating={!!jokesData}
            />
          ))}
          <span
            className="app__container__back-icon"
            onClick={() => setJokesData([])}
          >
            <ArrowUturnLeftIcon />
          </span>
        </div>
      ) : (
        <div className="app__container">
          <h2>Welcome to jokes generator</h2>
          <h3>Please fill the form:</h3>
          <Form onSubmitData={handleSendData} />
        </div>
      )}
    </div>
  );
}

export default App;

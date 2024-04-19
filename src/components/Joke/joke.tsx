/* eslint-disable react/prop-types */
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import './joke.scss';

interface JokeProps {
  setup: string;
  punchline: string;
  showRating: boolean;
}

export const Joke: React.FC<JokeProps> = ({ setup, punchline, showRating }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="joke">
      <div className="joke__body">
        <p className="joke__body__setup">{setup}</p>
        <p className="joke__body__punchline">{`>> ${punchline}`}</p>
      </div>
      {showRating && (
        <div className="joke__rating">
          <div className="joke__rating__icon">
            <HandThumbUpIcon
              style={{ color: selected === 'up' ? 'blue' : 'gray' }}
              onClick={() => setSelected('up')}
            />
          </div>
          <div className="joke__rating__icon">
            <HandThumbDownIcon
              style={{ color: selected === 'down' ? 'blue' : 'gray' }}
              onClick={() => setSelected('down')}
            />
          </div>
        </div>
      )}
    </div>
  );
};

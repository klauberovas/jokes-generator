/* eslint-disable react/prop-types */
import { useState } from 'react';
import './form.scss';

export interface Data {
  name: string;
  type: string;
  count: number;
}

interface FormProp {
  onSubmitData: (data: Data) => void;
}

const TYPES = ['general', 'dad', 'knock-knock', 'programming'];

export const Form: React.FC<FormProp> = ({ onSubmitData }) => {
  const [formData, setFormData] = useState<Data>({
    name: '',
    type: '',
    count: 0,
  });

  const options = [];
  for (let i = 0; i < 10; i++) {
    options.push(i + 1);
  }

  //odeslání dat do App
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmitData(formData);
  };

  //změna dat v objektu
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Your name
        <input
          className="form__input"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form__label">
        Select type of Jokes
        <select
          className="form__input"
          name="type"
          onChange={handleChange}
          required
        >
          <option value="">Select one</option>
          {TYPES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="form__label">
        Select count of Jokes
        <select
          className="form__input"
          name="count"
          onChange={handleChange}
          required
        >
          <option value="">Select one</option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
};

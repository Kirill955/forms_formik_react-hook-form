import { useState } from "react";

// Todo - создать логику для сверстанных полей
// при отправке формы вывести значения полей в консоль
// добавить валидацию для имени /^[A-Za-z]+$/)
// добавить disable для кнопки
// после отправки формы сбросить все значения полей

export const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [document, setDocument] = useState("Паспорт");
  const [infoMethod, setInfoMethod] = useState("phone");

  return (
    <form>
      <div>
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name">Возраст</label>
        <input
          id="name"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>

      <hr />
      <select
        value={document}
        onChange={(event) => setDocument(event.target.value)}
      >
        <option>Паспорт</option>
        <option>Удостоверение</option>
      </select>

      <hr />
      <input
        type="radio"
        id="infoMethodPhone"
        name="contact"
        value="phone"
        checked={infoMethod === "phone"}
        onChange={(event) => setInfoMethod(event.target.value)}
      />
      <label htmlFor="infoMethodPhone">Phone</label>

      <input
        type="radio"
        id="infoMethodPhoneMail"
        name="contact"
        value="mail"
        checked={infoMethod === "mail"}
        onChange={(event) => setInfoMethod(event.target.value)}
      />
      <label htmlFor="infoMethodPhoneMail">Mail</label>

      <hr />
      <button type="submit" disabled={!name && !age}>
        Отправить
      </button>
    </form>
  );
};

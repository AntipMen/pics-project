import React, { useState } from "react";
import { questions } from "./questions";
import "./index.css";

export const FAQblock = () => {
  const [select, setSelect] = useState(questions);

  return (
    <div className="faq">
      <h2>Pricing FAQ</h2>
      {questions.map((item) => (
        <Question
          key={item.id}
          id={item.id}
          select={select}
          question={item.question}
          answer={item.answer}
          onClick={() => setSelect(item)}
        />
      ))}
    </div>
  );
};

const Question = ({ question, id, onClick, answer }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className={show ? "selected" : "question"}
        key={id}
        id={id}
        onClick={onClick && handleClick}
      >
        {question}
      </div>
      <Answer show={show} answer={answer} />
    </>
  );
};

const Answer = ({ show, answer }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="answer">
      {answer.includes("|")
        ? answer.split("|").map((text) => <p key={text.id}>{text}</p>)
        : answer}
    </div>
  );
};

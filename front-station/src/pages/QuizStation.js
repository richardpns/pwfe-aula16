import React, { useState } from 'react';

const questions = [
  { question: 'Quem é considerado o pai da computação?', options: ['Alan Turing', 'Bill Gates', 'Steve Jobs'], answer: 'Alan Turing' },
  { question: 'Qual foi o primeiro computador eletrônico de uso geral e quem o desenvolveu ?  ', options: ['IBM 650, desenvolvido pela IBM', 'ENIAC, desenvolvido pela Universidade da Pensilvânia', 'Colossus, desenvolvido pela equipe liderada por Alan Turing'], answer: 'ENIAC, desenvolvido pela Universidade da Pensilvânia' },
  { question: 'Em que década o primeiro computador pessoal foi introduzido no mercado de consumo em massa?', options: ['Década de 1950', 'Década de 1990', ' Década de 1970'], answer: 'Década de 1970' },
  { question: 'Quem inventou o conceito de programação através de cartões perfurados?', options: ['Herman Hollerith', 'John von Neumann', 'Grace Hopper'], answer: 'Herman Hollerith' },
  { question: 'Qual foi o primeiro sistema operacional desenvolvido para computadores pessoais?', options: ['MS-DOS', ' Unix', 'CP/M'], answer: 'CP/M' },
  { question: 'Qual foi o primeiro computador a usar memória de acesso aleatório (RAM)?', options: ['Whirlwind', ' IBM 701', 'UNIVAC I'], answer: 'UNIVAC I' },
  { question: 'O que representou o ENIAC, em 1946, para o desenvolvimento da computação?', options: ['Primeiro computador comercialmente disponível', 'Primeiro computador a usar transistores', 'Primeiro computador eletrônico de uso geral'], answer: 'Primeiro computador eletrônico de uso geral' },
  { question: 'Quem foi a primeira programadora de computadores, trabalhando na Máquina Analítica de Charles Babbage?', options: ['Margaret Hamilton', 'Ada Lovelace', 'Grace Hopper'], answer: 'Ada Lovelace' },
  { question: 'Que evento em 1969 é considerado o nascimento da internet?', options: ['Lançamento do ARPANET', 'Criação do protocolo TCP/IP', 'Lançamento do primeiro satélite de comunicação'], answer: 'Lançamento do ARPANET' },
  { question: 'Qual foi o primeiro microprocessador comercialmente disponível e em que ano foi lançado?', options: ['Intel 8080, lançado em 1974', 'AMD Athlon, lançado em 1999', 'MOS Technology 6502, lançado em 1975'], answer: 'Intel 8080, lançado em 1974' },
]

function QuizStation() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <h1>Quiz Station</h1>
      {showScore ? (
        <div>Your score is {score} out of {questions.length}</div>
      ) : (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizStation;
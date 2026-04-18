import './App.css';
import Button from './domain/Button.js';
import CustomConsole from './domain/Console.js';
import NextLine from './domain/NextLine.js';
import Pad from './domain/Pad.js';
import Screen from './domain/Screen.js';

const screen = new Screen();
const cons = new CustomConsole();
const pad = new Pad(screen);

const button1 = new Button("1");
button1.addSubscriber(cons);
pad.addButton(button1);
const button2 = new Button("2");
pad.addButton(button2);
const button3 = new Button("3");
button3.addSubscriber(cons);
pad.addButton(button3);
const button4 = new Button("4");
pad.addButton(button4);
const button5 = new Button("5");
button5.addSubscriber(cons);
pad.addButton(button5);
const button6 = new Button("6");
pad.addButton(button6);
const button7 = new Button("7");
button7.addSubscriber(cons);
pad.addButton(button7);
const button8 = new Button("8");
pad.addButton(button8);
const button9 = new Button("9");
button9.addSubscriber(cons);
pad.addButton(button9);
const button0 = new Button("0");
pad.addButton(button0);

const nextLine = new NextLine();
pad.addButton(nextLine);

export default function App() {
  return (
    <main className="container">
      <h1>Phone Pad</h1>
      <p>Projet initialisé avec Vite + React + TypeScript.</p>
      <div className="pad">
        {pad.buttons.map(button => (
          <button key={button.getValue()} style={{ margin: 2 }} onClick={() => button.click()}>
            {button.getValue()}
          </button>
        ))}
      </div>
      <div className="screen">
        {screen.display()}
      </div>
    </main>
  );
}

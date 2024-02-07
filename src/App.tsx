import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button, Card, Input } from '@atoms/index';
import './index.css';

function App() {
  return (
    <div>
      <img src={reactLogo} className="logo" alt="logo" />
      <img src={viteLogo} className="logo" alt="logo" />
      <h1 className="text-3xl font-bold underline">Weather App</h1>
      {/* <Button theme="btn-secondary">Click me</Button>
      <Input placeholder="Enter text" theme="input-bordered" />

      <Card tw={['bg-blue-950', 'rounded-sm']}>
        <Card.Title>Card Title</Card.Title>
        <p>Olakease</p>
        <Card.Actions>
          <Button>Button</Button>
        </Card.Actions>
      </Card> */}
    </div>
  );
}

export default App;

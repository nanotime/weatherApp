import { NavBar } from '@organisms/index';
import flatenizeTw from '@utils/flatenizeTw';
import './index.css';

const mainClasses = flatenizeTw([['md:grid', 'md:grid-cols-6']]);

const sideBarClasses = flatenizeTw([
  ['md:col-span-2', 'md:bg-base-100', 'md:h-screen'],
]);

const contentClasses = flatenizeTw([
  // upper grid classes
  ['md:mt-3', 'md:col-span-4'],
  // sub grid classes
  ['md:grid', 'md:justify-center'],
]);

function App() {
  return (
    <main className={mainClasses}>
      <div className={sideBarClasses}>
        <NavBar />
      </div>
      <div className={contentClasses}>
        <h2>Trabajanding...</h2>
      </div>
    </main>
  );
}

export default App;
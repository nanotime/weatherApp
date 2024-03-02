import flatenizeTw from '@utils/flatenizeTw';
import { Content, Sidebar } from '@organisms/index';

import './index.css';

const mainClasses = flatenizeTw([['md:grid', 'md:grid-cols-6']]);

function App() {
  return (
    <main className={mainClasses}>
      <Sidebar />
      <Content />
    </main>
  );
}

export default App;

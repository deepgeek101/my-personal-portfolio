import TopLine from './components/layout/TopLine';
import Footer from './components/layout/Footer';
import Intro from './components/sections/Intro';
import Work from './components/sections/Work';
import Now from './components/sections/Now';
import OffScreen from './components/sections/OffScreen';
import Hello from './components/sections/Hello';
import { now } from './content/now';

// Sections in page order. "Now" only appears once it has content, and the
// § numbers are counted from what's actually shown.
const sections = [
  { id: 'work', title: 'Work', Component: Work },
  now.items.length > 0 && { id: 'now', title: 'Now', Component: Now },
  { id: 'off-screen', title: 'Off-screen', Component: OffScreen },
  { id: 'hello', title: 'Say hello', Component: Hello },
].filter(Boolean);

function App() {
  return (
    <div className='mx-auto max-w-[56rem] px-4 sm:px-6'>
      <TopLine />
      <main>
        <Intro />
        {sections.map(({ Component, ...section }, i) => (
          <Component
            key={section.id}
            {...section}
            number={String(i + 1).padStart(2, '0')}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;

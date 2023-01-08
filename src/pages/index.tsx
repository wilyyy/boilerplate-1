import type { NextPage } from 'next';
import ButtonTest from '../components/ButtonTest';
import { useTheme } from '../utils/ContextProviderTemplate';

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center ${
        theme === 'light' ? 'bg-white' : 'bg-slate-700'
      }`}
    >
      <ButtonTest
        onButtonClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Click Me
      </ButtonTest>
    </div>
  );
};

export default Home;

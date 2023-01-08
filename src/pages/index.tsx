import type { NextPage } from 'next';
import ButtonTest from '../components/ButtonTest';
import { useTheme } from '../utils/ContextProviderTemplate';

const Home: NextPage = () => {
   const { theme } = useTheme();
   console.log(theme);

   return (
      <div className="w-screen h-screen flex justify-center items-center">
         <ButtonTest text="Click Me" />
      </div>
   );
};

export default Home;

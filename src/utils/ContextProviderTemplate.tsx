// AppProvider HOC to manage global state using context hook
// rename AppProvider.tsx if gonna use this

import { useContext, createContext, useState } from 'react';

interface InitialStates {
  theme: string;
  setTheme: (newTheme: string) => void;
}

const initialStates: InitialStates = {
  theme: 'light',
  setTheme: () => undefined,
};

type Props = {
  children?: React.ReactNode;
};

const MyContext = createContext<InitialStates>(initialStates);

const AppProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(initialStates.theme);

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {/* ***idk if should do this or tailwind it*** */}

      {/* <style jsx global>
            {`
               body {
                  background-color: ${globalTheme[theme].base};
                  color: ${globalTheme[theme].text};
                  transition: all 0.35s linear;
                  font-family: 'cartograph_extralight';
               }
            `}
         </style> */}
      {children}
    </MyContext.Provider>
  );
};

export default AppProvider;

//theme hook
export const useTheme = () => {
  const { theme, setTheme } = useContext(MyContext);
  return { theme, setTheme };
};

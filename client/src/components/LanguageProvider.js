import {useState, useEffect, useContext, createContext} from 'react';

const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

export const useLanContext = () => {
  return useContext(LanguageContext);
}
export const useLanUpdateContext = () => {
  return useContext(LanguageUpdateContext);
}


const LanguageProvider = ({children}) => {
  // const [enLan, setEnLan] = useState(true);

  // const [json, setJson] = useState({});
  // useEffect(() => {
  //   // fetch json en
  // })
  // const toggleLan = () => {
  //   setEnLan(!enLan);
  //   if (enLan) {
  //     // fetch json en
  //   } else {
  //     // fetch json jp
  //   }
  // }

  return (
    // <LanguageContext.Provider value = { json }>
    <LanguageContext.Provider>
      <LanguageUpdateContext.Provider>
      {/* <LanguageUpdateContext.Provider value={ toggleLan }> */}

        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };
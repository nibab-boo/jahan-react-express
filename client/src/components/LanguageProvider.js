import {useState, useEffect, useContext, createContext} from 'react';

import { jsonEn } from './json_en';
import { jsonJp } from './json_jp';

const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

export const useLanContext = () => {
  return useContext(LanguageContext);
}
export const useLanUpdateContext = () => {
  return useContext(LanguageUpdateContext);
}

const LanguageProvider = ({children}) => {
  const [enLan, setEnLan] = useState(true);

  const [json, setJson] = useState(jsonJp);

  const toggleLan = () => {
    setEnLan(() => !enLan);
    changeJson();
  }

  const changeJson = () => {
    if (enLan) {
      setJson(jsonEn);
    } else {
      setJson(jsonJp);
    }
  }


  return (
    <LanguageContext.Provider value = { json }>
    {/* <LanguageContext.Provider> */}
      {/* <LanguageUpdateContext.Provider> */}
      <LanguageUpdateContext.Provider value={ toggleLan }>

        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };
import { createContext } from "react";
import { LEVEL } from "../utils/constants";

const LevelContext = createContext({
  level: LEVEL.UNDEFINED,
});

export default LevelContext;

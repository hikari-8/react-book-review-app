import { UserAuthInfo } from "@/types/types"
import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react"

type AuthContextType = {
  authInfo: UserAuthInfo | null;
  setAuthInfo: Dispatch<SetStateAction<UserAuthInfo | null>>;
}

// global state
// const LoggedInContext = createContext()
const AuthInfoContext = createContext<AuthContextType>(
  {
    authInfo: null,
    setAuthInfo: () => {}
  }
)

// AuthInfo Provider コンポーネントを作成, これを用いてAuthInfoContextの値を設定する
type AuthInfoProviderProps = {
  children: ReactNode;
};

export const AuthInfoProvider = ({ children }: AuthInfoProviderProps)=> {
  const [authInfo, setAuthInfo] = useState<UserAuthInfo | null>(null);
  return (
    <AuthInfoContext.Provider value={{authInfo, setAuthInfo}}>
      {children}
    </AuthInfoContext.Provider>
  )
}

export const useAuthInfoContext = ()=> useContext(AuthInfoContext);
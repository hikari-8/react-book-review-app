import { UserAuthInfo } from "@/types/types"
import { createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react"
import { usePersistedState } from '../hooks/usePersistedState';

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
  // const [authInfo, setAuthInfo] = useState<UserAuthInfo | null>(null);
  const [authInfo, setAuthInfo] = usePersistedState<UserAuthInfo | null>('auth-info', null);
  return (
    <AuthInfoContext.Provider value={{authInfo, setAuthInfo}}>
      {children}
    </AuthInfoContext.Provider>
  )
}

export const useAuthInfoContext = ()=> useContext(AuthInfoContext);
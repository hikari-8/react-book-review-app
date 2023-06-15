import { useAuthInfoContext } from "../state/UserAuthInfoState"
import React from "react"


export const Home: React.FC = ()=> {
  const {authInfo} = useAuthInfoContext()
  console.log({authInfo})

  return (
    <div>
      Welcome back , {authInfo?.name}
    </div>
  )
}
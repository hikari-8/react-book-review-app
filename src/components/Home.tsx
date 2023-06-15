import { useAuthInfoContext } from "../state/UserAuthInfoState"
import React from "react"


export const Home: React.FC = ()=> {
  const {authInfo} = useAuthInfoContext()
  console.log({authInfo})

  return (
    <div className="w-96 mx-auto text-lg font-bold mt-20 text-center items-center content-center"> 
      Welcome back , {authInfo?.name}
    </div>
  )
}
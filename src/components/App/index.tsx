import Login from '../Login'
import Nav from '../Nav'
import { useEffect, useState } from 'react'
import TrackInfo from '../TrackInfo'
import { getAccessToken } from '../../auth'
import axios from "axios"

function App() {
  
  const [token, setToken] = useState<string | null>(null)
  const [profile, setProfile] = useState<string | null>(null)

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if(code && !token) {
      getToken()
    }
    if(token){
      getUserInfo()
    }
  }, [token])

  const getToken = async () => {

    if(code){
      const accessToken = await getAccessToken(clientId, code) 
      setToken(accessToken)
      // console.log(token)
    }
  }

const getUserInfo = async () => {
  const { data } = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  setProfile(data.images [0].url) 
}
  if (!token) {
    return (
      <>
        <Login /> 
      </>
    )

    
    } else {
      return (
      <>
      <Nav 
        profile={profile}
        />
      <TrackInfo /> 
      </>  
      
    )}
  } 

  

export default App

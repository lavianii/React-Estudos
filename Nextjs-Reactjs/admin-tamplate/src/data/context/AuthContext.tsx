import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie"
import firebase from "../../firabase/config";
import Usuario from "../../model/Usuario";
import route from "next/router";

interface AuthContextProps {
  usuario?: Usuario
  loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken()
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0].providerId,
    imagemUrl: usuarioFirebase.photoURL
  }
}

function gerenciarCookie(logado) {
  if (logado) {
    Cookies.set('admin-template', logado, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template')
  }
}

export function AuthProvider(props) {
  const [carregando, setCarregando] = useState(true)
  const [usuario, setUsuario] = useState<Usuario>(null)

  async function configurarSessao(usuarioFirebase) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase)
      setUsuario(usuario) 
      gerenciarCookie(true)
      setCarregando(false)
      return usuario.email
    } else {
      setUsuario(null)
      gerenciarCookie(false)
      setCarregando(false)
      return false
    }
  }

  async function loginGoogle() {
    const resposta = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    
    configurarSessao(resposta.user) 
    route.push("/")
    
  }

  useEffect(() => {
    const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
    return () => cancelar()
  },[])

  return (
    <AuthContext.Provider value={{
      usuario,
      loginGoogle
    }}>
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthContext
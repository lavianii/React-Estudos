import AuthInput from "../components/auth/AuthInput";
import { IconeAviso } from "../components/icons";
import { useState } from "react";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {
    
    const { usuario, loginGoogle } = useAuth()

    const [erro, setErro] = useState(null)
    const [modo, setModo] = useState<"login" | "cadastro">("login")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function exibirErro(msg: any, tempoEmSegundos = 5){
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

    function submeter() {
        if (modo === "login") {
            console.log("Login")
            exibirErro("Ocorreu um  erro no login")
        } else {
            console.log("Cadastrar")
            exibirErro("Ocorreu um  erro no cadastro")
        }
    }

    return (
        <div className={`flex h-screen justify-center items-center`}>
            <div className="hidden md:block w-1/2 lg:w-2/3">
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagem da Tela de Autenticação"
                    className="h-screen w-full object-cover" />
            </div>
            <div className="m-10 w-full md:w-1/2 ">
                <h1 className={`text-xl font-bold mb-5 text-3`}>
                    {modo === "login" ? "Entre com a sua Conta" : "Cadastre-se na Plataforma"}
                </h1>
                {erro ? (
                    <div className={`
                       flex items-center
                       bg-red-400 text-white py-3 px-5 my-2
                       border border-red-700 rounded-lg
                   `}>
                        {IconeAviso()}
                        <span className={`ml-3`}>{erro}</span>
                    </div>
                ) : false}

                <AuthInput
                    tipo="email"
                    label="Email"
                    valor={email}
                    valorMudou={setEmail}
                    obigatorio={true}
                />
                <AuthInput
                    tipo="password"
                    label="Senha"
                    valor={senha}
                    valorMudou={setSenha}
                    obigatorio={true}
                />
                <button onClick={submeter} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {modo === "login" ? "Entrar" : "Cadastrar"}
                </button>
                <hr className="my-6 border-gray-300 " />
                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}>
                    Entrar com o Google
                </button>
                {modo === "login" ? (
                    <p className="mt-8">
                        Novo por aqui então?
                        <a onClick={() => setModo("cadastro")} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                          cursor-pointer 
                    `}> Crie uma conta gratuita</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo("login")} className={`
                    text-blue-500 hover:text-blue-700 font-semibold
                      cursor-pointer 
                `}> Entre com suas Credenciais</a>
                    </p>
                )}
            </div>
        </div>
    )
}

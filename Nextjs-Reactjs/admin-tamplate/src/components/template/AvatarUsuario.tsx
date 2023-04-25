import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface AvatarUsuario { 
  className?: string
}


export default function AvatarUsuario(props: AvatarUsuario) {
  const { usuario } = useAuth()
  const avatar = "https://xsgames.co/randomusers/avatar.php?g=pixel"
  return (
    <Link href={"/perfil"}>
      <img src={usuario?.imagemUrl ?? avatar} 
            alt="Avatar do usuario" 
            className={`
              h-10 w-10 rounded-full cursor-pointer
              ${props.className}
            `}
      />
    </Link>
  )
}
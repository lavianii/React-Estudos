import Layout from '@/components/template/Layout';
import useAppData from '@/data/hook/useAppData';

export default function Notificaoes() {
    const { alternarTema } = useAppData()

    return (
        <Layout titulo='Notificações' subtitulo='Aqui você ira gerenciar as suas notificações'>
 
            <button onClick={alternarTema}>alternarTema</button>
        </Layout>
    )
}
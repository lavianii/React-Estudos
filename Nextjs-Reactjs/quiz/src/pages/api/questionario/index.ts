import { embaralhar } from "@/functions/array";
import { NextApiRequest, NextApiResponse } from "next";
import { questoes } from "../bancoDeQuestoes";

export default function Questionario(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ids = questoes.map(questao => questao.id)
  res.status(200).json(embaralhar(ids))
}
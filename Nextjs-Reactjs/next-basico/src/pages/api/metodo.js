export default function metodo (req,res){
  if(req.method === "GET"){
    res.status(200).json({
      nome: "Jonas"
    })
  }else{
    res.status(200).json({
      nome: "Leticia"
    })
  }


  res.status(200).json({
    metodo: req.method
  })
}
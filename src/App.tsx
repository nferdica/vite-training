import { Header } from "./components/header";

export default function App() {
  return(
    <div>
      <Header/>

      <Aluno nome="Ana Caroline" idade={25} />
      <Aluno nome="Nathan Ferdinando" idade={25} />

    </div>
  )
}

interface AlunoProps{
  nome: string;
  idade: number;
}

function Aluno({nome, idade}: AlunoProps) {
  return(
    <div>
      <h1>Aluno: {nome}</h1>
      <h3>Idade: {idade}</h3>
    </div>
  )
}
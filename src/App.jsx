import "./App.css";
import { useState } from "react";
import CadastroCidadao from "./pages/cadastrocidadao";

function App() {

  // CONTROLE DE TELA
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  function abrirCadastroCidadao() {
    setMostrarCadastro(true);
  }

  function voltarHome() {
    setMostrarCadastro(false);
  }

  // MOSTRAR CADASTRO
  if (mostrarCadastro) {
    return <CadastroCidadao voltar={voltarHome} />;
  }

  return (
    <div className="container">

      {/* HEADER */}
      <header className="topbar">
        <div className="header">

          <div className="logo">
            <img src="/prefeitura.png" alt="Prefeitura" className="logo-img" />

            <div className="logo-text">
              <span className="prefeitura">Prefeitura de Tupã</span>

              <div className="secretaria">
                <img src="/meio-ambiente.png" alt="Meio Ambiente" />
                <span>Secretaria do Meio Ambiente</span>
              </div>
            </div>
          </div>

          <div className="actions">
            <a href="#">Entrar</a>
            <button className="btn-outline">Criar uma conta</button>
          </div>

        </div>
      </header>

      {/* MAIN */}
      <main className="main">

        <h1>Crie sua conta na</h1>
        <h2>SECRETARIA DO MEIO AMBIENTE</h2>

        <p className="sub">
          Registre-se e conecte-se ao portal para solicitar serviços ambientais
        </p>

        <button className="btn-primary">
          Criar minha conta
        </button>

        <p className="login">
          Já possui conta? <a href="#">Entrar</a>
        </p>

        {/* CARDS */}
        <div className="cards-wrapper">

          <p className="perfil-title">
            SELECIONE SEU PERFIL:
          </p>

          <div className="cards">

            {/* EQUIPE */}
            <div className="card">
              <div className="icon">👷</div>
              <h3>Equipe</h3>
              <span>Membro da equipe</span>
              <button>Selecionar</button>
            </div>

            {/* CIDADÃO */}
            <div className="card">
              <div className="icon">👤</div>
              <h3>Cidadão</h3>
              <span>Solicitação de serviço</span>

              {/* BOTÃO FUNCIONANDO */}
              <button onClick={abrirCadastroCidadao}>
                Selecionar
              </button>

            </div>

            {/* GESTÃO */}
            <div className="card">
              <div className="icon">💼</div>
              <h3>Gestão</h3>
              <span>Coordenação</span>
              <button>Selecionar</button>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default App;
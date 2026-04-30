import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import CadastroCidadao from "./pages/CadastroCidadao";
import Login from "./pages/Login";

/* ================= HOME ================= */

function Home() {
  return (
    <div className="container">

      <header className="topbar">
        <div className="header">

          <div className="logo">
            <img src="/prefeitura.png" className="logo-img" />

            <div className="logo-text">
              <span>Prefeitura de Tupã</span>

              <div className="secretaria">
                <img src="/meio-ambiente.png" />
                <span>Secretaria do Meio Ambiente</span>
              </div>
            </div>
          </div>

          <div className="actions">
            <Link to="/login">Entrar</Link>
            <button className="btn-outline">Criar uma conta</button>
          </div>

        </div>
      </header>

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
          Já possui conta? <Link to="/login">Entrar</Link>
        </p>

        <div className="cards-wrapper">

          <p className="perfil-title">
            SELECIONE SEU PERFIL:
          </p>

          <div className="cards">

            <div className="card">
              <div className="icon">👷</div>
              <h3>Equipe</h3>
              <span>Membro da equipe</span>
              <button>Selecionar</button>
            </div>

            <div className="card">
              <div className="icon">👤</div>
              <h3>Cidadão</h3>
              <span>Solicitação de serviço</span>

              <Link to="/cadastro-cidadao">
                <button>Selecionar</button>
              </Link>

            </div>

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

/* ================= APP ================= */

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-cidadao" element={<CadastroCidadao />} />

      </Routes>

    </Router>
  );
}

export default App;
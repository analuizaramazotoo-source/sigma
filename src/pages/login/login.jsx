import "../../App.css";  
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  function voltarPagina() {
    navigate("/");
  }

  return (

    <div className="container">

      {/* BARRA SUPERIOR */}
      <header className="topbar">
        <div className="header">

          <div className="logo">
            <img src="/prefeitura.png" alt="Prefeitura" className="logo-img" />

            <div className="logo-text">
              <span>Prefeitura de Tupã</span>

              <div className="secretaria">
                <img src="/meio-ambiente.png" alt="Meio Ambiente" />
                <span>Secretaria do Meio Ambiente</span>
              </div>
            </div>
          </div>

          <div className="actions">
            <button
              className="btn-outline"
              onClick={voltarPagina}
            >
              Voltar
            </button>
          </div>

        </div>
      </header>

      {/* MAIN */}
      <main className="main">

        <h1>ENTRE NA</h1>
        <h2>SECRETARIA DO MEIO AMBIENTE</h2>

        <div className="cards-wrapper">

          <p className="perfil-title">
            SELECIONE SEU PERFIL:
          </p>

          <div className="cards">

            <div className="card">
              <div className="icon">👷</div>
              <h3>Equipe</h3>
              <span>Membro da equipe</span>
              <button>Entrar</button>
            </div>

            <div className="card">
              <div className="icon">👤</div>
              <h3>Cidadão</h3>
              <span>Solicitação de serviço</span>

              <Link to="/login/cidadao">
                <button>Entrar</button>
              </Link>

            </div>

            <div className="card">
              <div className="icon">💼</div>
              <h3>Gestão</h3>
              <span>Coordenação</span>
              <button>Entrar</button>
            </div>

          </div>

        </div>

      </main>

    </div>

  );

}

export default Login;
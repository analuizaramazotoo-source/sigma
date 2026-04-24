import "./App.css";

function App() {
  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span>Prefeitura de Tupã</span>
          <span className="divider">|</span>
          <span>Secretaria do Meio Ambiente</span>
        </div>

        <div className="actions">
          <a href="#">Entrar</a>
          <button className="btn-outline">Criar uma conta</button>
        </div>
      </header>

      {/* MAIN */}
      <main className="main">
        <h1>Crie sua conta na</h1>
        <h2>SECRETARIA DO MEIO AMBIENTE</h2>

        <p className="sub">
          Registre-se e conecte-se ao portal para solicitar serviços ambientais
        </p>

        <button className="btn-primary">Criar minha conta</button>

        <p className="login">
          Já possui conta? <a href="#">Entrar</a>
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
            <button>Selecionar</button>
          </div>

          <div className="card">
            <div className="icon">💼</div>
            <h3>Gestão</h3>
            <span>Coordenação</span>
            <button>Selecionar</button>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
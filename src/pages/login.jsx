import "../App.css";

function Login() {

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

        </div>
      </header>

      <main className="main">

        <h1>Bem-vindo de volta</h1>
        <h2>FAÇA SEU LOGIN</h2>

        <p className="sub">
          Acesse sua conta
        </p>

        <button className="btn-primary">
          Entrar
        </button>

      </main>

    </div>

  );

}

export default Login;
export default function CadastroCidadao() {
  return (

    <div className="cadastro-container">

      <div className="card-cadastro">

        <h2>Cadastro do Cidadão</h2>

        <form>

          <input
            type="text"
            placeholder="Nome Completo"
          />

          <input
            type="email"
            placeholder="E-mail"
          />

          <input
            type="text"
            placeholder="Celular"
          />

          <input
            type="text"
            placeholder="CPF"
          />

          <div className="senha-group">

            <input
              type="password"
              placeholder="Senha"
            />

            <input
              type="password"
              placeholder="Confirmar Senha"
            />

          </div>

          <button type="submit">
            CADASTRAR
          </button>

        </form>

      </div>

    </div>

  );
}
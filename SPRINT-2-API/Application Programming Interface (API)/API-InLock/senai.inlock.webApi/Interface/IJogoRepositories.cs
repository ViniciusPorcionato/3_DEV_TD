using senai.inlock.webApi.Domain;

namespace senai.inlock.webApi.Interface
{
    public interface IJogoRepositories
    {
        /// <summary>
        /// Cadastrar novo jogo
        /// </summary>
        /// <param name="novoJogo"></param>
        void Cadastrar(JogoDomain novoJogo);

        /// <summary>
        /// Listar todos os jogos cadastrados
        /// </summary>
        /// <returns></returns>
        List<JogoDomain> ListarTodos();


        /// <summary>
        /// Deletar um filme existente
        /// </summary>
        /// <param name="id">Id do objeto a ser deletado</param>
        void Deletar(int id);


    }
}

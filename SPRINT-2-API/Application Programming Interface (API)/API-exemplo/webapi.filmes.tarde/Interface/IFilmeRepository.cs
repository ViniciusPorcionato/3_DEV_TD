using webapi.filmes.tarde.Domains;

namespace webapi.filmes.tarde.Interface
{
    public interface IFilmeRepository
    {

        //CRUD
        //CREATE
        //READ
        //UPDATE
        //DELETE

        /// <summary>
        /// Cadastrar um novo filme
        /// </summary>
        /// <param name="novoFilme">Esse parametro é o parametro que sera cadastrado</param>
        void Cadastrar(FilmeDomain novoFilme);

        /// <summary>
        /// Retornar todos os filmes cadastrados
        /// </summary>
        /// <returns>Lista de filmes</returns>
        List<FilmeDomain> ListarTodos();

        /// <summary>
        /// Buscar um objeto atraves de seu id
        /// </summary>
        /// <param name="id">id do objeto que sera buscado</param>
        /// <returns>Objeto que foi buscado</returns>
        FilmeDomain BuscarPorId(int id);

        /// <summary>
        /// Atualizar um filme existente passando o id pelo corpo d requisicao
        /// </summary>
        /// <param name="filme">objeto com novas informacoes</param>
        void AtualizarIdCorpo(FilmeDomain filme);

        /// <summary>
        /// Atualizar um genero existente passando o id pela URL da requisicao
        /// </summary>
        /// <param name="id">id do objeto a ser atualizado</param>
        /// <param name="filme">Objeto com as novas informacoes</param>
        void AtualizarIdUrl(int id, FilmeDomain filme);

        /// <summary>
        /// Deletar um filme existente
        /// </summary>
        /// <param name="id">Id do objeto a ser deletado</param>
        void Deletar(int id);

    }
}

using webapi.filmes.tarde.Domains;

namespace webapi.filmes.tarde.Interface
{

    /// <summary>
    /// Interface responsalvel pelo repositorio genero
    /// 
    /// Define os metodos que serao implementados pelo repositorio
    /// </summary>
    public interface IGeneroRepository
    {

        //CRUD

        //tipoDeRetorno   NomeMetodo(TipoParametro NomeParametros)
        /// <summary>
        /// Cadastrar um novo genero
        /// </summary>
        /// <param name="novoGenero">Esse parametro é o objeto que sera cadastrado</param>
        void Cadastrar(GeneroDomain novoGenero);

        /// <summary>
        /// Retornar todos os Generos cadastrados
        /// </summary>
        /// <returns>Lista de generos</returns>
        List<GeneroDomain> ListarTodos();


        /// <summary>
        /// Buscar um objeto atraves do seu Id
        /// </summary>
        /// <param name="id">Id do objeto que sera buscado</param>
        /// <returns>Objeto que foi buscado</returns>
        GeneroDomain BuscarPorId(int id);




        /// <summary>
        /// Atualizar um genero existente passando o id pelo corpo d requisicao
        /// </summary>
        /// <param name="genero">Objeto com as novas informacoes</param>
        void AtualizarIdCorpo(GeneroDomain genero);

        /// <summary>
        /// Atualizar um genero existente passando o id pela URL da requisicao
        /// </summary>
        /// <param name="id">id do objeto a ser atualizado</param>
        /// <param name="genero">Objeto com as novas informacoes</param>
        void AtualizarIdUrl(int id, GeneroDomain genero);

        /// <summary>
        /// Deletar um genero existente
        /// </summary>
        /// <param name="id">Id do objeto a ser deletado</param>
        void Deletar(int id);

    }
}

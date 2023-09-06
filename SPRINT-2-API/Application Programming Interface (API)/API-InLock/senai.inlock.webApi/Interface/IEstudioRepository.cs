using senai.inlock.webApi.Domain;

namespace senai.inlock.webApi.Interface
{
    public interface IEstudioRepository
    {

        /// <summary>
        /// Cadastrar um novo estudio
        /// </summary>
        /// <param name="novoEstudio"></param>
        void Cadastrar(EstudioDomain novoEstudio);

        /// <summary>
        /// Retornar todos os estudios cadastrados
        /// </summary>
        /// <returns></returns>
        List<EstudioDomain> ListarTodos();

        /// <summary>
        /// Deletar um filme existente
        /// </summary>
        /// <param name="id">Id do objeto a ser deletado</param>
        void Deletar(int id);


    }
}

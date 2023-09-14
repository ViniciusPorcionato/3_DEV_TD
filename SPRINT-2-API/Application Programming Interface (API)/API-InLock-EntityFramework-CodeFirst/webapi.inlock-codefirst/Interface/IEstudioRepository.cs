using webapi.inlock_codefirst.Domain;

namespace webapi.inlock_codefirst.Interface
{
    public interface IEstudioRepository
    {

        //CRUD
        //CREATE
        //READ
        //UPDATE
        //DELETE

        void Cadastrar(EstudioDomain novoEstudio);
        List<EstudioDomain> ListarTodos();
        EstudioDomain BuscarPorId(int id);
        void AtualizarIdCorpo(EstudioDomain estudio);
        void AtualizarIdUrl(int id, EstudioDomain estudio);
        void Deletar(int id);

    }
}

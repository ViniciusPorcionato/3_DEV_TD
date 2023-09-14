using webapi.inlock_codefirst.Domain;

namespace webapi.inlock_codefirst.Interface
{
    public interface ITiposUsuarioRepository
    {

        //CRUD
        //CREATE
        //READ
        //UPDATE
        //DELETE

        void Cadastrar(TiposUsuarioDomain novoTipoUsuario);
        List<TiposUsuarioDomain> ListarTodos();
        TiposUsuarioDomain BuscarPorId(int id);
        void AtualizarIdCorpo(TiposUsuarioDomain tipoUsuario);
        void AtualizarIdUrl(int id, TiposUsuarioDomain tipoUsuario);
        void Deletar(int id);

    }
}

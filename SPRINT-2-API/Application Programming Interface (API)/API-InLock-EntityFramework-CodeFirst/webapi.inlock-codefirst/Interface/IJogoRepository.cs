using webapi.inlock_codefirst.Domain;

namespace webapi.inlock_codefirst.Interface
{
    public interface IJogoRepository
    {

        //CRUD
        //CREATE
        //READ
        //UPDATE
        //DELETE

        void Cadastrar(JogoDomain novoJogo);
        List<JogoDomain> ListarTodos();
        JogoDomain BuscarPorId(int id);
        void AtualizarIdCorpo(JogoDomain jogo);
        void AtualizarIdUrl(int id, JogoDomain jogo);
        void Deletar(int id);
    }
}

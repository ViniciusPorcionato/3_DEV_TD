using webapi.inlock_codefirst.Domain;

namespace webapi.inlock_codefirst.Interface
{
    public interface IUsuarioRepository
    {

        UsuarioDomain BuscarUsuario(string email, string senha);
        void Cadastrar(UsuarioDomain usuario);

    }
}

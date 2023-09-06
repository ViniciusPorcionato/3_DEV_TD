using senai.inlock.webApi.Domain;
using senai.inlock.webApi.Repositories;

namespace senai.inlock.webApi.Interface
{
    public interface IUsuarioRepository
    {
        public UsuarioDomain Login(string email, string senha);

    }
}

using Microsoft.AspNetCore.Identity;
using webapi.filmes.tarde.Domains;

namespace webapi.filmes.tarde.Interface
{
    public interface IUsuarioRepository
    {
        /// <summary>
        /// metodo que busca um usuario por email e senha
        /// </summary>
        /// <param name="email">email usuario</param>
        /// <param name="senha">senha usuario</param>
        /// <returns>objeto que foi buscado</returns>
        UsuarioDomain Login(string email, string senha);

    }
}

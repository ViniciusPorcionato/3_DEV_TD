using webapi.inlock_codefirst.Contexts;
using webapi.inlock_codefirst.Domain;
using webapi.inlock_codefirst.Interface;
using webapi.inlock_codefirst.Utils;

namespace webapi.inlock_codefirst.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {

        private readonly InlockContext ctx;
        public UsuarioRepository()
        {
           ctx = new InlockContext();
        }

        public UsuarioDomain BuscarUsuario(string email, string senha)
        {
            try
            {
                var usuarioBuscado = ctx.Usuario.FirstOrDefault(u => u.Email == email);

                if (usuarioBuscado != null)
                {
                    bool verificacao = Cripitografia.CompararHash(senha, usuarioBuscado.Senha!);

                    if (verificacao)
                    {
                        return usuarioBuscado;
                    }
                    return null;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Cadastrar(UsuarioDomain usuario)
        {
            try
            {
               usuario.Senha = Cripitografia.GerarHash(usuario.Senha!);

                ctx.Usuario.Add(usuario);

                ctx.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}

using senai.inlock.webApi.Domain;
using senai.inlock.webApi.Interface;
using System.Data.SqlClient;

namespace senai.inlock.webApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private string StringConexao = "Data Source = NOTE04-S15; Initial Catalog = inlock_games_td; User Id = sa; Pwd = Senai@134";
        public UsuarioDomain Login(string email, string senha)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string querySelect = "SELECT Usuario.IdUsuario,Usuario.IdTipoUsuario,TiposUsuario.Titulo, Usuario.Email FROM Usuario INNER JOIN TiposUsuario ON TiposUsuario.IdTipoUsuario = Usuario.IdTipoUsuario WHERE Email = @Email AND Senha = @Senha";

                con.Open();

                using (SqlCommand cmd = new SqlCommand(querySelect, con))
                {   
                    cmd.Parameters.AddWithValue("@Email", email);
                    cmd.Parameters.AddWithValue("@Senha", senha);

                    SqlDataReader rdr = cmd.ExecuteReader();

                    if (rdr.Read())
                    {
                        UsuarioDomain usuario = new UsuarioDomain()
                        {
                            IdUsuario = Convert.ToInt32(rdr["IdUsuario"]),

                            IdTipoUsuario = Convert.ToInt32(rdr["IdTipoUsuario"]),

                            TipoUsuario = new TipoUsuarioDomain
                            {
                                Titulo = rdr["Titulo"].ToString(),
                            },

                            Email = rdr["Email"].ToString(),
                        };
                        return usuario;
                    }
                    return null;
                }
            }
        }
    }
}

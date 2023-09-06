using senai.inlock.webApi.Domain;
using senai.inlock.webApi.Interface;
using System.Data.SqlClient;

namespace senai.inlock.webApi.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        private string StringConexao = "Data Source = NOTE04-S15; Initial Catalog = inlock_games_td; User Id = sa; Pwd = Senai@134";
        public List<TipoUsuarioDomain> ListarTodos()
        {
            List<TipoUsuarioDomain> listaTiposUsuarios = new List<TipoUsuarioDomain>();

            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string querySelectAll = "SELECT IdTipoUsuario, Titulo FROM TiposUsuario";

                con.Open();

                SqlDataReader rdr;

                using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                {
                    rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        TipoUsuarioDomain tipoUsuario = new TipoUsuarioDomain()
                        {
                            IdTipoUsuario = Convert.ToInt32(rdr["IdTipoUsuario"]),

                            Titulo = (rdr["Titulo"]).ToString(),
                        };

                        listaTiposUsuarios.Add(tipoUsuario);
                    }
                }
            }
            return listaTiposUsuarios;
        }
    }
}

using System.Data.SqlClient;
using webapi.filmes.tarde.Domains;
using webapi.filmes.tarde.Interface;

namespace webapi.filmes.tarde.Repositories
{
    public class FilmeRepository : IFilmeRepository
    {

        /// <summary>
        /// String de conexao com o BD, passando nome do servidor, nome do BD, id do user e senha do BD
        /// Data Source = Nome servidor
        /// Initial Catalog = Nome do BD
        /// Autenticacao:
        ///     -Windows : Integrated Security = True
        ///     -SQLServer :
        ///     User id = Nome do usuario
        ///     Pwd = Senha
        /// </summary>
        private string StringConexao = "Data Source = NOTE04-S15; Initial Catalog = Filmes_TD; User Id = sa; Pwd = Senai@134";

        public void AtualizarIdCorpo(FilmeDomain filme)
        {
            throw new NotImplementedException();
        }

        public void AtualizarIdUrl(int id, FilmeDomain filme)
        {
            throw new NotImplementedException();
        }

        public FilmeDomain BuscarPorId(int id)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string querySelectById = "SELECT IdFilme, IdGenero, Titulo FROM Filme WHERE IdFilme = @IdFilme";

                SqlDataReader rdr;

                using (SqlCommand cmd = new SqlCommand(querySelectById, con))
                {
                    cmd.Parameters.AddWithValue("@IdFilme", id);

                    con.Open();

                    rdr = cmd.ExecuteReader();

                    if (rdr.Read())
                    {
                        FilmeDomain filmeBuscado = new FilmeDomain
                        {
                            IdFilme = Convert.ToInt32(rdr["IdFilme"]),
                            IdGenero = Convert.ToInt32(rdr["IdGenero"]),
                            Titulo = rdr["Titulo"].ToString()
                        };
                        return filmeBuscado;
                    }

                    return null;
                }

            }
        }

        public void Cadastrar(FilmeDomain novoFilme)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string queryInsert = "INSERT INTO Filme(IdGenero, Titulo) VALUES (@IdGenero, @Titulo)";

                con.Open();

                using (SqlCommand cmd = new SqlCommand(queryInsert, con))
                {
                    cmd.Parameters.AddWithValue("@IdGenero", novoFilme.IdGenero);

                    cmd.Parameters.AddWithValue("@Titulo", novoFilme.Titulo);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Deletar(int id)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string queryDelete = "DELETE FROM Filme WHERE IdFilme = (@IdFilme)";

                using (SqlCommand cmd = new SqlCommand(queryDelete, con))
                {
                    cmd.Parameters.AddWithValue("@IdFilme", id);

                    con.Open();

                    cmd.ExecuteNonQuery();
                }
            }
        }

        /// <summary>
        /// Metodo para listar todos os objetos do tipo filme
        /// </summary>
        /// <returns>Lista de objetos do tipo de filme</returns>
        public List<FilmeDomain> ListarTodos()
        {
            //cria uma lista de filmes onde sera armazenados os filmes
            List<FilmeDomain> listaFilmes = new List<FilmeDomain>();

            //declara a SQLConnection passando a string de conexao como parametro
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                //declara a instrucao a ser executada
                string querySelectAll = "SELECT IdFilme, IdGenero , Titulo FROM Filme";

                //Abre a conexao com o bando de dados
                con.Open();

                //declara o SQLDataReader para percorrer(ler) a tabela no banco de dados
                SqlDataReader rdr;

                //delcara a SQLCommand passando a query que sera executada na conexao
                using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                {
                    //executa a query e armazena os dados no rdr
                    rdr = cmd.ExecuteReader();

                    //enquanto houver registros para serem lindos no rdr o laço se repetira
                    while (rdr.Read())
                    {
                        FilmeDomain filme = new FilmeDomain()
                        {
                            //Atribui a propriedade IdFilme o valor da primeira coluna da tabela
                            IdFilme = Convert.ToInt32(rdr[0]),
                            //Atribui a propriedade IdGenero o valor da segunda coluna da tabela
                            IdGenero = Convert.ToInt32(rdr[1]),
                            //Atribui a propriedade Titulo o valor da coluna Titulo
                            Titulo = (rdr["Titulo"]).ToString(),

                        };
                        //adiciona o objeto criado dentro da lista
                        listaFilmes.Add(filme);

                    }
                }
            }

            return listaFilmes;
                
        }
    }
}

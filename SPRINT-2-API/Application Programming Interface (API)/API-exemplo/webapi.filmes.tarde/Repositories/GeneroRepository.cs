    using System.Data.SqlClient;
using webapi.filmes.tarde.Domains;
using webapi.filmes.tarde.Interface;

namespace webapi.filmes.tarde.Repositories
{
    public class GeneroRepository : IGeneroRepository
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
        public void AtualizarIdCorpo(GeneroDomain genero)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string queryUPDATE = $"UPDATE Genero SET Nome = @NovoNome WHERE IdGenero = {genero.IdGenero}";

                con.Open();
                using (SqlCommand cmd = new SqlCommand(queryUPDATE, con))
                {
                    cmd.Parameters.AddWithValue("@NovoNome", genero.Nome);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void AtualizarIdUrl(int id, GeneroDomain genero)
        {

            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string queryUPDATE = "UPDATE Genero SET Nome = @NovoNome WHERE  IdGenero = @IdGenero";

                con.Open();
                using (SqlCommand cmd = new SqlCommand(queryUPDATE, con))
                {
                    cmd.Parameters.AddWithValue("@NovoNome", genero.Nome);
                    cmd.Parameters.AddWithValue("@IdGenero", id);
                    cmd.ExecuteNonQuery();
                }
            }

        }


        /// <summary>
        /// buscar genero por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public GeneroDomain BuscarPorId(int id)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string querySelectById = "SELECT IdGenero, Nome FROM Genero WHERE IdGenero = @IdGenero";

                SqlDataReader rdr;

                using (SqlCommand cmd = new SqlCommand(querySelectById, con))
                {
                    cmd.Parameters.AddWithValue("@IdGenero", id);
                    con.Open();
                    rdr = cmd.ExecuteReader();

                    if (rdr.Read())
                    {
                        GeneroDomain generoBuscado = new GeneroDomain
                        {
                            IdGenero = Convert.ToInt32(rdr["IdGenero"]),
                            Nome = rdr["Nome"].ToString()
                        };
                        return generoBuscado;
                    }

                    return null;
                }

            }
            //**********OUTRA FORMA**********
            //List<GeneroDomain> listaGenero = ListarTodos();
            //GeneroDomain generoBuscado = new GeneroDomain();

            //foreach (GeneroDomain genero in listaGenero)
            //{
            //    if (genero.IdGenero == id) generoBuscado = genero;
            //    {
            //    }
            //}
            //return generoBuscado;
        }

        /// <summary>
        /// cadastrar um novo genero
        /// </summary>
        /// <param name="novoGenero">objeto com as informacoes que serao cadastradas</param>
        public void Cadastrar(GeneroDomain novoGenero)
        {
            //declara a SQLConnection passando a string de conexao como parametro
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                //declara a query que sera executada                     
                string queryInsert = "INSERT INTO Genero(Nome) VALUES (@nomeGenero)";

                //delcara a SQLCommand passando a query que sera executada na conexao
                using (SqlCommand cmd = new SqlCommand(queryInsert, con))
                {

                    cmd.Parameters.AddWithValue("nomeGenero", novoGenero.Nome);

                    //Abre a conexao com o bando de dados
                    con.Open();

                    //Executa a query
                    cmd.ExecuteNonQuery();
                }

            }
        }

        public void Deletar(int id)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {

                string queryDelete = $"DELETE FROM Genero WHERE IdGenero =  (@IdGenero)";

                using (SqlCommand cmd = new SqlCommand(queryDelete, con))
                {

                    cmd.Parameters.AddWithValue("@IdGenero", id);

                    con.Open();

                    cmd.ExecuteNonQuery();
                }
            }
        }

        /// <summary>
        /// Metodo para listar todos os objetos do tipo genero
        /// </summary>
        /// <returns>Lista de objetos do tipo de genero</returns>
        public List<GeneroDomain> ListarTodos()
        {
            //cria uma lista de generos onde sera armazenados os generos
            List<GeneroDomain> listaGeneros = new List<GeneroDomain>();

            //declara a SQLConnection passando a string de conexao como parametro
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                //declara a instrucao a ser executada
                string querySelectAll = "SELECT IdGenero, Nome FROM Genero";

                //Abre a conexao com o bando de dados
                con.Open();

                //declara o SQLDataReader para percorrer(ler) a tabela no banco de dados
                SqlDataReader rdr;

                //delcara a SQLCommand passando a query que sera executada na conexao
                using (SqlCommand cmd = new SqlCommand(querySelectAll,con))
                {
                    //executa a query e armazena os dados no rdr
                    rdr = cmd.ExecuteReader();

                    //enquanto houver registros para serem lindos no rdr o laço se repetira
                    while (rdr.Read()) {

                        GeneroDomain genero = new GeneroDomain()
                        {
                            //Atribui a propriedade IdGenero o valor da primeira coluna da tabela
                            IdGenero = Convert.ToInt32(rdr[0]),

                            //Atribui a propriedade Nome o valor da coluna Nome
                            Nome = (rdr["Nome"]).ToString(),

                        };

                             
                        listaGeneros.Add(genero);

                    }
                }
            }

            //retornando a lista de generos
            return listaGeneros;

        }

        
    }
}

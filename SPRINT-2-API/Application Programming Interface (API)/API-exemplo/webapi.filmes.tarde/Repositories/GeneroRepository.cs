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
            throw new NotImplementedException();
        }

        public void AtualizarIdUrl(int id, GeneroDomain genero)
        {
            throw new NotImplementedException();
        }

        public GeneroDomain BuscarPorId(int id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(GeneroDomain novoGenero)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Metodo para listar todos os objetos do tipo genero
        /// </summary>
        /// <returns>Lista de objetos do tipo de genero</returns>
        public List<GeneroDomain> ListarTodos()
        {
            //cria uma lista de generos onde sera armazenados os generos
            List<GeneroDomain> listaGeneros = new List<GeneroDomain>();

            //declara a SQLConnection pasando a string de conexao como parametro
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

                        //adiciona o objeto criado dentro da lista
                        listaGeneros.Add(genero);

                    }
                }
            }

            //retornando a lista de generos
            return listaGeneros;

        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.filmes.tarde.Domains;
using webapi.filmes.tarde.Interface;
using webapi.filmes.tarde.Repositories;

namespace webapi.filmes.tarde.Controller
{
    /// <summary>
    /// Define que a rota de requisicao sera no seguinte formato
    /// Dominiio/api/nomeController
    /// Example: http://localhost:5000/api/Genero
    /// </summary>
    [Route("api/[controller]")]

    /// <summary>
    /// Define que é um controlador de api
    /// </summary>
    [ApiController]

    /// <summary>
    /// Define que o tipo de resposta da api é JSON
    /// </summary>
    [Produces("application/json")]
    public class GeneroController : ControllerBase
    {
        /// <summary>
        /// objeto que ira receber os metodos definidos na interface (referencia a interface)
        /// </summary>
        private IGeneroRepository _generoRepository { get; set; }

        /// <summary>
        /// instancia do objeto _generoRepository para que haja referencia aos metodos no repositorio
        /// </summary>
        public GeneroController()
        {
            _generoRepository = new GeneroRepository();
        }


        /// <summary>
        /// Endpoint que acessa o metado de listar os generos
        /// </summary>
        /// <returns>Lista de generos com status code</returns>
        [HttpGet]
        public IActionResult Get(){

            try
            {
                //cria uma lista para receber os generos
                List<GeneroDomain> listaGeneros = _generoRepository.ListarTodos();

                //retorna os status code 200 ok e a lista de generos no formato JSON
                return StatusCode(200, listaGeneros);
                //return Ok (listaGeneros);
            }
            catch (Exception erro)
            {
                //retorna um status code 400 - BadRequest e a mensagem de erro
                return BadRequest(erro.Message);

                throw;
            }
        
        }


    }
}

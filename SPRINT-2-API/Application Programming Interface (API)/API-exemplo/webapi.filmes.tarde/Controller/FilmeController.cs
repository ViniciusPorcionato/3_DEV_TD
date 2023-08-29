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
    /// Example: http://localhost:5000/api/Filme
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
    public class FilmeController : ControllerBase
    {
        private IFilmeRepository _filmeRepository { get; set; }

        public FilmeController()
        {
            _filmeRepository = new FilmeRepository();
        }

        /// <summary>
        /// Endpoint para acessar o método de listar filmes
        /// </summary>
        /// <returns>lista de generos com status code</returns>
        [HttpGet("ListarFilmes")]
        public IActionResult Get()
        {
            try
            {
                List<FilmeDomain> listaFilmes = _filmeRepository.ListarTodos();

                return Ok(listaFilmes);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
                throw;
            }
        }

        /// <summary>
        /// Endpoint para o método deletar filme por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("Deletar/{id}")]

        public IActionResult Delete(int id)
        {
            try
            {
                _filmeRepository.Deletar(id);
                return Ok();
            }
            catch (Exception erro)
            {
                return BadRequest($"{erro.Message}");
                throw;
            }
        }

        /// <summary>
        /// Endpoint para o método buscar filme por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("BuscarPorId/{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                FilmeDomain filmeBuscado = _filmeRepository.BuscarPorId(id);

                if (filmeBuscado == null)
                {
                    return NotFound("O Filme buscado não foi encontrado !");
                }

                return StatusCode(200, filmeBuscado);

            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
                throw;
            }
        }


        [HttpPost("Cadastrar")]
        public IActionResult Post(FilmeDomain novoFilme)
        {

            try
            {
                _filmeRepository.Cadastrar(novoFilme);
                return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest($"{erro.Message}");
                throw;
            }
        }

    }


}

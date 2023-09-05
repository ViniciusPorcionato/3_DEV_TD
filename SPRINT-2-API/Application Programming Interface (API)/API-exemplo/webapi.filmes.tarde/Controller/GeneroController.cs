using Microsoft.AspNetCore.Authorization;
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
        /// Endpoint que acessa o método de listar os generos
        /// </summary>
        /// <returns>Lista de generos com status code</returns>
        [HttpGet("ListarGeneros")]
        public IActionResult Get()
        {

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

        /// <summary>
        /// Endpoint para o método cadastrar genero
        /// </summary>
        /// <param name="novoGenero">objeto recebid na aquisição</param>
        /// <returns>status code</returns>
        [HttpPost("Cadastrar")]
        //Data Annotation : precisa estar logado para acessar a rota
        [Authorize(Roles = "Administrador")]
        public IActionResult Post(GeneroDomain novoGenero)
        {

            try
            {
                //cria uma objeto para cadastrar novos generos
                _generoRepository.Cadastrar(novoGenero);

                //retorna os status code 200 ok e a lista de generos no formato JSON
                return StatusCode(201);
            }
            catch (Exception erro)
            {
                //retorna um status code 400 - BadRequest e a mensagem de erro
                return BadRequest(erro.Message);

                throw;
            }

        }

        /// <summary>
        /// Endpoint para o método atualizar genero
        /// </summary>
        /// <param name="genero"></param>
        /// <returns></returns>
        [HttpPut("Atualizar")]
        //Data Annotation : precisa estar logado para acessar a rota
        [Authorize(Roles = "Administrador")]
        public IActionResult PutIdBody(GeneroDomain genero)
        {
            try
            {

                GeneroDomain generoBuscado = _generoRepository.BuscarPorId(genero.IdGenero);

                if (generoBuscado != null)
                {
                    try
                    {
                        _generoRepository.AtualizarIdCorpo(genero);

                        return StatusCode(200);
                    }
                    catch (Exception erro)
                    {
                        return BadRequest(erro.Message);
                        throw;
                    }
                }

                return NotFound("Genero não encontrado !");

            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
                throw;
            }
        }

        /// <summary>
        /// Endpoint para o método deletar genero por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("Deletar/{id}")]
        //Data Annotation : precisa estar logado para acessar a rota
        [Authorize(Roles = "Administrador")]
        public IActionResult Delete(int id)
        {
            try
            {
                _generoRepository.Deletar(id);
                //retorna os status code 200 ok e a lista de generos no formato JSON
                return StatusCode(204);
            }
            catch (Exception erro)
            {
                //retorna um status code 400 - BadRequest e a mensagem de erro
                return BadRequest(erro.Message);
                throw;
            }

        }

        /// <summary>
        /// Endpoint para o método buscar genero por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("BuscarPorId/{id}")]
        public IActionResult GetById(int id)
        {

            try
            {

                GeneroDomain generoBuscado = _generoRepository.BuscarPorId(id);

                if (generoBuscado == null)
                {
                    return NotFound("O Genero buscado não foi encontrado !");
                }

                return StatusCode(200, generoBuscado);

            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
                throw;
            }

        }

        /// <summary>
        /// Endpoint para o método atualizar genero por id
        /// </summary>
        /// <param name="id"></param>
        /// <param name="genero"></param>
        /// <returns></returns>
        [HttpPut("AtualizarPorId/{id}")]
        //Data Annotation : precisa estar logado para acessar a rota
        [Authorize(Roles = "Administrador")]
        public IActionResult PutById(int id, GeneroDomain genero)
        {

            try
            {
                _generoRepository.AtualizarIdUrl(id, genero);
                return StatusCode(204);
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
                throw;
            }

        }


    }
}

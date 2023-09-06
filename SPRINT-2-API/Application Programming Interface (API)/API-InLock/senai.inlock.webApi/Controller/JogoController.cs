using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai.inlock.webApi.Domain;
using senai.inlock.webApi.Interface;
using senai.inlock.webApi.Repositories;
using System.Data;

namespace senai.inlock.webApi.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    [Authorize]
    public class JogoController : ControllerBase
    {
        public IJogoRepository _jogoRepository { get; set; }

        public JogoController()
        {
            _jogoRepository = new JogoRepository();
        }

        /// <summary>
        /// Endpoint criado para exibir todos os jogos cadastrados
        /// </summary>
        /// <returns></returns>
        [HttpGet("ListarJogos")]
        public IActionResult Get()
        {
            try
            {
                List<JogoDomain> listaJogos = _jogoRepository.ListarTodos();

                return Ok(listaJogos);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
                throw;
            }
        }

        /// <summary>
        /// Endpoint criado para deletar algum jogo por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("Deletar/{id}")]
        [Authorize(Roles = "2")]

        public IActionResult Delete(int id)
        {
            try
            {
                _jogoRepository.Deletar(id);
                return Ok();
            }
            catch (Exception erro)
            {
                return BadRequest($"{erro.Message}");
                throw;
            }
        }

        /// <summary>
        /// Endpoint criado para cadastrar um novo jogo
        /// </summary>
        /// <param name="novoJogo"></param>
        /// <returns></returns>
        [HttpPost("CadastrarJogos")]
        [Authorize(Roles = "2")]
        public IActionResult Post(JogoDomain novoJogo)
        {

            try
            {
                _jogoRepository.Cadastrar(novoJogo);
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

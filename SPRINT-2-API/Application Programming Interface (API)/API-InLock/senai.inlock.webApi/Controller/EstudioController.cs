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
    public class EstudioController : ControllerBase
    {
        private IEstudioRepository _estudioRepository { get; set; }

        public EstudioController()
        {
            _estudioRepository = new EstudioRepository();
        }

        /// <summary>
        /// Endpoint criado para exibir os estúdios
        /// </summary>
        /// <returns></returns>
        [HttpGet("ListarEstudios")]
        public IActionResult Get()
        {
            try
            {
                List<EstudioDomain> listaEstudios = _estudioRepository.ListarTodos();

                return Ok(listaEstudios);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
                throw;
            }
        }

        /// <summary>
        /// Endpoint criado para deletar algum estúdio por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("Deletar/{id}")]
        [Authorize(Roles = "2")]
        public IActionResult Delete(int id)
        {
            try
            {
                _estudioRepository.Deletar(id);
                return Ok();
            }
            catch (Exception erro)
            {
                return BadRequest($"{erro.Message}");
                throw;
            }
        }

        /// <summary>
        /// Endpoint criado para cadastrar um novo estúdio
        /// </summary>
        /// <param name="novoEstudio"></param>
        /// <returns></returns>
        [HttpPost("Cadastrar")]
        [Authorize(Roles = "2")]
        public IActionResult Post(EstudioDomain novoEstudio)
        {

            try
            {
                _estudioRepository.Cadastrar(novoEstudio);
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

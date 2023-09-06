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

    [Authorize(Roles = "2")]
    public class TipoUsuarioController : ControllerBase
    {
        public ITipoUsuarioRepository _tipoUsuarioRepository { get; set; }

        public TipoUsuarioController()
        {
            _tipoUsuarioRepository = new TipoUsuarioRepository();
        }

        /// <summary>
        /// Endpoint criado para exibir os tipos de usuários
        /// </summary>
        /// <returns></returns>
        [HttpGet("ListarTiposUsuarios")]
        public IActionResult Get()
        {
            try
            {
                List<TipoUsuarioDomain> listaTiposUsuarios = _tipoUsuarioRepository.ListarTodos();

                return Ok(listaTiposUsuarios);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
                throw;
            }
        }
    }
}

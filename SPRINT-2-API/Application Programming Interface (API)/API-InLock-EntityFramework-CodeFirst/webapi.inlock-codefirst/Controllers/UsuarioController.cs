using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.inlock_codefirst.Domain;
using webapi.inlock_codefirst.Interface;
using webapi.inlock_codefirst.Repositories;

namespace webapi.inlock_codefirst.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]  
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository;

        public UsuarioController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Post(UsuarioDomain usuario)
        {
            try
            {
                _usuarioRepository.Cadastrar(usuario);

                return Ok(usuario);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet]
        public IActionResult GetByEmailAndPassaword()
        {
            try
            {

            }
            catch (Exception)
            {

                throw;
            }
        }



    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using System.Text;
using webapi.event_.Domains;
using webapi.event_.Interfaces;
using webapi.event_.Repositories;

namespace webapi.event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ComentariosEventoController : ControllerBase
    {

        //acesso aos métodos do repositório
        ComentariosEventoRepository comentario = new ComentariosEventoRepository();

        //armazena dados da api externa
        private readonly ContentModeratorClient _contentModeratorClient;

        /// <summary>
        /// Construtor que recebe os dados necessários para o acesso ao serviço externo
        /// </summary>
        /// <param name="contentModeratorClient">objeto do tipo ContentModeratorClient</param>
        public ComentariosEventoController(ContentModeratorClient contentModeratorClient)
        {
           _contentModeratorClient= contentModeratorClient;
        }

        [HttpPost("ComentarioIA")]

        public async Task<IActionResult> PostIA(ComentariosEvento comentariosEvento)
        {
            try
            {
                //se a descrição do comentario não for passado no objeto
                if (string.IsNullOrEmpty(comentariosEvento.Descricao))
                {
                    return BadRequest("O texto a ser analisado não pode ser vazio !");
                }

                //converte a string (descrição do comentário) em um memoryStream
                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(comentariosEvento.Descricao));

                //realiza a moderação do conteúdo (descrição do comentário)
                var moderationResult = await _contentModeratorClient.TextModeration
                    .ScreenTextAsync("text/plain", stream, "por" , false, false, null, true);

                //se existir termos ofensivos 
                if (moderationResult.Terms != null)
                {
                    //atribuir false para "Exibe"
                    comentariosEvento.Exibe = false;

                    //cadastra o comentário
                    comentario.Cadastrar(comentariosEvento);

                }
                else
                {
                    //atribuir true para exibe
                    comentariosEvento.Exibe = true;

                    //cadastrar comentario
                    comentario.Cadastrar(comentariosEvento);

                    
                }

                return StatusCode(201, comentariosEvento);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
                throw;
            }
        }



        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(comentario.Listar());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);

            }
        }


        [HttpGet("ListarSomenteExibe")]
        public IActionResult GetIA()
        {
            try
            {
                return Ok(comentario.ListarSomenteExibe());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);

            }
        }

        [HttpPost]
        public IActionResult Post(ComentariosEvento comentarioEvento)
        {
            try
            {
                comentario.Cadastrar(comentarioEvento);

                return StatusCode(201);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                comentario.Deletar(id);

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("BuscarPorId/{id}")]
        public IActionResult GetById(Guid id)
        {

            try
            {
                return Ok(comentario.BuscarPorId(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [HttpGet("BuscarPorIdUsuario")]
        public IActionResult GetByIdUser(Guid idUsuario , Guid idEvento)
        {

            try
            {
                return Ok(comentario.BuscarPorIdUsuario(idUsuario, idEvento));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }


    }
}

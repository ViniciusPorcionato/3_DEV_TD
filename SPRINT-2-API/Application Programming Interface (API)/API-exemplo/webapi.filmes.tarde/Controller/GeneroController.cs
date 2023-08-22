using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
    }
}

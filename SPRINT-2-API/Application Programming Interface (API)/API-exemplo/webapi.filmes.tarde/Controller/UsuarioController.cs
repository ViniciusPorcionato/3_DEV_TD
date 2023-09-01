using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using webapi.filmes.tarde.Domains;
using webapi.filmes.tarde.Interface;
using webapi.filmes.tarde.Repositories;

namespace webapi.filmes.tarde.Controller
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
        public IActionResult Login(UsuarioDomain usuario)
        {
            try
            {
                UsuarioDomain usuarioBuscado = _usuarioRepository.Login(usuario.Email, usuario.Senha);

                if (usuarioBuscado == null)
                {
                    return NotFound("Usuário não encontrado ! Email ou Senha Inválidos");
                }

                //Caso encontre o usuario buscado prossegue para a criação do token

                //1 - definir as informações (Claims) que serão fornecidos no token (Payload)
                var claims = new[]
                {
                    //formato da claim(tipo, valor)
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),
                    new Claim(JwtRegisteredClaimNames.Email,usuarioBuscado.Email ),
                    new Claim(ClaimTypes.Role, usuarioBuscado.Permissao),
                    //criar uma claim personalizada
                    //new Claim("Claim Personalizada", "Valor Personalizado
                };

                //2 - Definir a chave de acesso ao token
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("filmes-chave-autenticacao-webapi-dev"));

                //3 - Definir as credenciais do token (Header)
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                //4 - Gerar o token
                var token = new JwtSecurityToken
                (
                    //emissor do token
                    issuer: "webapi.filmes.tarde",

                    //destinatario
                    audience: "webapi.filmes.tarde",

                    //dados definidos (Payload)
                    claims: claims,

                    //tempo de expiração
                    expires:DateTime.Now.AddMinutes(5),

                    //credenciais do token
                    signingCredentials : creds
                );

                //5 - Retornar o token criado
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });

            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
                throw;
            }


        }

    }
}

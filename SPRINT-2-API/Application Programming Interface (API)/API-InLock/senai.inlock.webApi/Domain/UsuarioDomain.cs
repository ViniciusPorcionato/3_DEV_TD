using System.ComponentModel.DataAnnotations;

namespace senai.inlock.webApi.Domain
{
    public class Usuario
    {

        public int IdUsuario { get; set; }

        public int IdTipoUsuario { get; set; }

        [Required(ErrorMessage = "Email obrigatório !")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Senha obrigatório !")]
        public string Senha { get; set; }


        public TipoUsuarioDomain? TipoUsuario { get; set; }

    }
}

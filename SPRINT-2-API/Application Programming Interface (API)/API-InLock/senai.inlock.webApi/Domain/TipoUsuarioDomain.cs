using System.ComponentModel.DataAnnotations;

namespace senai.inlock.webApi.Domain
{
    public class TipoUsuarioDomain
    {

        public int IdTipoUsuario { get; set; }

        [Required(ErrorMessage = "Titulo de tipo usuário obrigatório !")]
        public string Titulo { get; set; }

    }
}

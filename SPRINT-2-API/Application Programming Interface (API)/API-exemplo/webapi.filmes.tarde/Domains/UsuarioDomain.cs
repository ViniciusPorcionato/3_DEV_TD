using System.ComponentModel.DataAnnotations;

namespace webapi.filmes.tarde.Domains
{
    /// <summary>
    /// Classe que representa a entidade usuario
    /// </summary>
    public class UsuarioDomain
    {

        public int IdUsuario { get; set; }

        /// <summary>
        /// Data Annotation
        /// </summary>
        [Required(ErrorMessage = "Email obrigatório !")]
        public string Email { get; set; }

        /// <summary>
        /// Data Annotation
        /// </summary>
        [StringLength(20,MinimumLength = 3, ErrorMessage = "O campo senha precisa ter no mínimo 3 e no máximo 20 caractéres")]
        [Required(ErrorMessage = "Senha obrigatória !")]
        public string Senha { get; set; }

        /// <summary>
        /// Data Annotation
        /// </summary>
        [Required(ErrorMessage = "Permissão obrigatória !")]
        public string Permissao { get; set; }


    }
}

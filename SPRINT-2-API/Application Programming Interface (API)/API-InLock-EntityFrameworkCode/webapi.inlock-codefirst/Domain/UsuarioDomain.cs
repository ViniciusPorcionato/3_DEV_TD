using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.inlock_codefirst.Domain
{
    [Table("Usuario")]
    public class UsuarioDomain
    {

        [Key]
        public Guid IdUsuario { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Email obrigatório !")]
        public string? Email { get; set; }

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Senha obrigatório !")]
        [StringLength(20, MinimumLength = 6, ErrorMessage = "Senha de 6 a 20 caracteres !")]
        public string? Senha { get; set; }

    }
}

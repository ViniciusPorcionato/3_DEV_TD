using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.inlock_codefirst.Domain
{
    [Table("Usuario")]
    [Index(nameof(Email), IsUnique = true)]
    public class UsuarioDomain
    {

        [Key]
        public Guid IdUsuario { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(200)")]
        [Required(ErrorMessage = "Email obrigatório !")]
        public string? Email { get; set; }

        [Column(TypeName = "VARCHAR(200)")]
        [Required(ErrorMessage = "Senha obrigatório !")]
        [StringLength(60, MinimumLength = 6, ErrorMessage = "Senha de 6 a 60 caracteres !")]
        public string? Senha { get; set; }

        [Required(ErrorMessage = "Tipo do usuário obrigatório !")]
        public Guid IdTipoUsuario { get; set; }

        [ForeignKey("IdTipoUsuario")]
        public TiposUsuarioDomain? TiposUsuario { get; set; }

    }
}

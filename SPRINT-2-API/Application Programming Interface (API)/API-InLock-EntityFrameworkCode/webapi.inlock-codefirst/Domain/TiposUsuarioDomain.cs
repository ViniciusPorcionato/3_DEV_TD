using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.inlock_codefirst.Domain
{
    [Table("TiposUsuario")]
    public class TiposUsuarioDomain
    {

        [Key]
        public Guid IdTiposUsuario { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Titulo obrigatório !")]
        public string? Titulo { get; set; }

    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.inlock_codefirst.Domain
{
    [Table("Jogo")]
    public class JogoDomain
    {
        [Key]
        public Guid IdJogo { get; set; } = Guid.NewGuid();

        [Column(TypeName ="VARCHAR(100)")]
        [Required(ErrorMessage = "Nome obrigatório !")]
        public string? Nome { get; set; }

        [Column(TypeName = "TEXT")]
        [Required(ErrorMessage = "Descrição obrigatório !")]
        public string? Descricao { get; set; }

        [Column(TypeName = "DATE")]
        [Required(ErrorMessage = "Data de lançamento obrigatório !")]
        public DateTime DataLancamento { get; set; }

        [Column(TypeName = "DECIMAL(4,2)")]
        [Required(ErrorMessage = "Preço obrigatório !")]
        public Decimal Preco { get; set; }


        //chave estrangeira ref. tabela estúdio
        public Guid IdEstudio { get; set; }

        [ForeignKey("IdEstudio")]
        public EstudioDomain? Estudio { get; set; }

    }
}

using System.ComponentModel.DataAnnotations;

namespace senai.inlock.webApi.Domain
{
    public class JogoDomain
    {

        public int IdJogo { get; set; }
        public int IdEstudio { get; set; }

        [Required(ErrorMessage = "Nome do jogo obrigatório !")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Descrição do jogo obrigatório !")]
        public string Descricao { get; set; }

        [Required(ErrorMessage = "Data de lançamento do jogo obrigatório !")]
        [DataType(DataType.Date)]
        public DateTime DataLancamento { get; set; }


        [Required(ErrorMessage = "Valor do jogo obrigatório !")]
        public float Valor { get; set; }


        //instância de EstudioDomain
        public EstudioDomain? Estudio { get; set; }

    }
}

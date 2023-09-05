using System.ComponentModel.DataAnnotations;

namespace senai.inlock.webApi.Domain
{
    public class EstudioDomain
    {
        public int IdEstudio { get; set; }

        [Required(ErrorMessage = "Nome do estúdio obrigatório !")]
        public string Nome { get; set; }

    }
}

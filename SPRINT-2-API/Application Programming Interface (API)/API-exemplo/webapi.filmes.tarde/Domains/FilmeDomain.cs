using System.ComponentModel.DataAnnotations;

namespace webapi.filmes.tarde.Domains
{
    /// <summary>
    /// Classe que representa a entidade(tabela) Filme
    /// </summary>
    public class FilmeDomain
    {
        public int IdFilme { get; set; }

        [Required(ErrorMessage = "Titulo do filme obrigatório !")]
        public string? Titulo { get; set; }
        public int IdGenero { get; set; }

        //Referencia para a classe Genero
        //Filme "enxergar" Genero
        public GeneroDomain? Genero { get; set; }

    }
}

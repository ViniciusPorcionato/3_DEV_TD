﻿using System.ComponentModel.DataAnnotations;

namespace webapi.filmes.tarde.Domains
{
    /// <summary>
    /// Classe que representa a entidade (tabela) Genero
    /// </summary>
    public class GeneroDomain
    {
        public int IdGenero { get; set; }

        /// <summary>
        /// Data Annotation
        /// </summary>
        [Required(ErrorMessage = "Nome do Genero obrigatório !")]
        public string? Nome { get; set; }

    }
}

using Microsoft.EntityFrameworkCore;
using webapi.inlock_codefirst.Domain;

namespace webapi.inlock_codefirst.Contexts
{
    public class InlockContext : DbContext
    {
        /// <summary>
        /// Definição das entidades do banco de dados
        /// </summary>
        public DbSet<TiposUsuarioDomain> TiposUsuario { get; set; }
        public DbSet<UsuarioDomain> Usuario { get; set; }
        public DbSet<EstudioDomain> Estudio { get; set; }
        public DbSet<JogoDomain> Jogo { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server= NOTE04-S15; Database= inlock_games_codeFirst_tarde; User Id = sa; Pwd= Senai@134; TrustServerCertificate=True;");
                base.OnConfiguring(optionsBuilder);
        }

    }
}

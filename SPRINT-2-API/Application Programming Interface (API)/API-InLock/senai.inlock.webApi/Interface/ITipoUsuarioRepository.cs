﻿using senai.inlock.webApi.Domain;

namespace senai.inlock.webApi.Interface
{
    public interface ITipoUsuarioRepository
    {

        /// <summary>
        /// Listar todos os tipos de usuarios cadastrados
        /// </summary>
        /// <returns></returns>
        List<TipoUsuarioDomain> ListarTodos();

    }
}

namespace webapi.inlock_codefirst.Utils
{
    public static class Cripitografia
    {
        /// <summary>
        /// Gerar uma Hash a partir de uma senha
        /// </summary>
        /// <param name="senha">Senha que receberá a hash</param>
        /// <returns>Senha criptografada com hash</returns>
        public static string GerarHash(string senha)
        {
            return BCrypt.Net.BCrypt.HashPassword(senha);
        }

        /// <summary>
        /// Verifica se a hash da senha informada é igual a hash salva no bd
        /// </summary>
        /// <param name="senhaForm">Senha passada no form de login</param>
        /// <param name="senhaBD">Senha cadastrada no banco</param>
        /// <returns>True or False</returns>
        public static bool CompararHash(string senhaForm, string senhaBD)
        {
            return BCrypt.Net.BCrypt.Verify(senhaForm, senhaBD);
        }

    }
}

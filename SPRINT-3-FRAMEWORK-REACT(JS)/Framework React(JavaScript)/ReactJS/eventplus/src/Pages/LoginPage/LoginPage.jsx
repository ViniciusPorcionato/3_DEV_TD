import React, { useContext, useState } from "react";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import logo from "../../Assets/images/logo-pink.svg";
import { Input, Button } from "../../Components/FormComponents/FormComponents";
import loginImage from "../../Assets/images/login.svg";
import api from '../../Services/Service'
import "./LoginPage.css";
import { UserContext, userDecodeToken } from "../../context/AuthContext";

const LoginPage = () => {
    
const [user, setUser] = useState({
    email: "vinicius@emai.com",
    senha: "vini123",
});

const {userData, setUserData} = useContext(UserContext)

async function handleSubmit(e) {

    e.preventDefault();

    if (user.email.length >= 3 && user.senha.length > 3) {

        try {
            const promise = await api.post("/login", {
                email: user.email,
                senha: user.senha
            });

            console.log(promise.data.token);

            const userFullToken = userDecodeToken(promise.data.token);

            setUserData(userFullToken);//guardar os dados decodificados

            localStorage.setItem("token", JSON.stringify(userFullToken));


        } catch (error) {

        alert('Usuário ou Senha inválidos ou conexão com internet perdida !')

        }
    } 
    else {

    }
}

return (

    <div className="layout-grid-login">
    <div className="login">
        <div className="login__illustration">
        <div className="login__illustration-rotate"></div>
        <ImageIllustrator
            imageRender={loginImage}
            altText="Imagem de um homem em frente de uma porta de entrada"
            additionalClass="login-illustrator "
        />
        </div>

        <div className="frm-login">
        <img src={logo} className="frm-login__logo" alt="" />

        <form className="frm-login__formbox" onSubmit={handleSubmit}>

            <Input
            additionalClass="frm-login__entry"
            type="email"
            id="login"
            name="login"
            required={true}
            value={user.email}
            manipulationFunction={(e) => {
                setUser({
                ...user,
                email: e.target.value.trim(),
                });
            }}
            placeholder="Username"
            />

            <Input
            additionalClass="frm-login__entry"
            type="password"
            id="senha"
            name="senha"
            required={true}
            value={user.senha}
            manipulationFunction={(e) => {
                setUser({
                ...user,
                senha: e.target.value.trim(),
                });
            }}
            placeholder="****"
            />

            <a href="" className="frm-login__link">
            Esqueceu a senha?
            </a>

            <Button
            textButton="Login"
            id="btn-login"
            name="btn-login"
            type="submit"
            additionalClass="frm-login__button"
            />
        </form>
        </div>
    </div>
    </div>
);
};

export default LoginPage;

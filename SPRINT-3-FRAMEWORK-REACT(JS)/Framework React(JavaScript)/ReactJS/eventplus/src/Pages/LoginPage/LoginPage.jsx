import React, { useContext, useEffect, useState } from "react";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import logo from "../../Assets/images/logo-pink.svg";
import { Input, Button } from "../../Components/FormComponents/FormComponents";
import loginImage from "../../Assets/images/login.svg"
import api from '../../Services/Service';
import Notification from '../../Components/Notification/Notification';



import "./LoginPage.css";
import { UserContext, userDecodeToken } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [user, setUser] = useState({ email: "vinicius@email.com", senha: "vini123" })

    // dados globais do usuário
    const { userData, setUserData } = useContext(UserContext)

    const navigate = useNavigate();

    useEffect(() => {
        if (userData.name) {
            navigate("/");
        }
    } , [userData])


    const [notifyUser, setNotifyUser] = useState({});



    async function handleSubmit(e) {

        e.preventDefault();

        if (user.email.length >= 3 && user.senha.length > 3) {

            try {
                const promise = await api.post("/Login", {
                    email: user.email,
                    senha: user.senha
                });


                const userFullToken = userDecodeToken(promise.data.token);

                setUserData(userFullToken); //guarda os dados decodificados (payload)
                localStorage.setItem("token", JSON.stringify(userFullToken));
                navigate("/")//manda o user pra home

                setNotifyUser({
                    titleNote: "Sucesso",
                    textNote: `Postando os dados na API !!`,
                    imgIcon: "success",
                    imgAlt:
                        "Imagem de ilustração de sucesso.",
                    showMessage: true,
                });

            } catch (error) {
                setNotifyUser({
                    titleNote: "Erro",
                    textNote: `Erro na API !!`,
                    imgIcon: "danger",
                    imgAlt:
                        "Usuário ou senha inválidos ou conexão com a internet interrompida.",
                    showMessage: true,
                })
            }
        }

        else {
            setNotifyUser({
                titleNote: "Aviso",
                textNote: `Preencha os dados corretamente !!!`,
                imgIcon: "warning",
                imgAlt:
                    "Imagem de ilustração de aviso.",
                showMessage: true,
            });
        }
        console.log(user);
    }

    return (

        //  <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
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
                                    ...user, //mantem tudo que tinha no user, e só muda o email(abaixo)
                                    email: e.target.value.trim()
                                })

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
                                    ...user, //mantem tudo que tinha no user, e só muda o senha(abaixo)
                                    senha: e.target.value.trim()
                                })

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

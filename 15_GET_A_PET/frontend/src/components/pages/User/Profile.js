import api from '../../../utils/api';

import { useState, useEffect } from 'react';

import styles from './Profile.module.css';
import formStyles from '../../form/Form.module.css';

import Input from '../../form/Input';

import useFlashMessage from '../../../hooks/useFlashMessage';
import RoundedImage from '../../layout/RoundedImage';

function Profile() {
    const [user, setUser] = useState({});
    const [preview, setPreview] = useState();
    const [token] = useState(localStorage.getItem('token') || '');
    const { setFlashMessage } = useFlashMessage();

    useEffect(() => {
        api.get('/users/checkuser', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setUser(response.data);
                setPreview(null);
            })
            .catch((error) => {
                console.error("Erro ao buscar perfil:", error);
            });
    }, [token]);

    function onFileChange(e) {
        setPreview(e.target.files[0]);
        setUser({ ...user, [e.target.name]: e.target.files[0] });
    }

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let msgType = 'success';

        const formData = new FormData();

        Object.keys(user).forEach((key) => {
            formData.append(key, user[key]);
        });

        const data = await api.patch(`/users/edit/${user._id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            setUser(response.data.user);
            setPreview(null);
            return response.data;
        }).catch((error) => {
            msgType = 'error';
            return error.response.data;
        });

        setFlashMessage(data.message, msgType);
    }

    return (
        <section>
            <div className={styles.profile_header}>
                <h1>Perfil</h1>
                {(user.image || preview) && (
                    <RoundedImage
                        src={
                            preview
                                ? URL.createObjectURL(preview)
                                : `http://localhost:5000/images/users/${user.image}?t=${new Date().getTime()}`
                        }
                        alt={user.name}
                    />
                )}
            </div>
            <form className={formStyles.form_container} onSubmit={handleSubmit}>
                <Input
                    text="Imagem"
                    type="File"
                    name="image"
                    handleOnChange={onFileChange}
                />

                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite o seu e-mail"
                    handleOnChange={handleChange}
                    value={user.email || ''}
                />

                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    handleOnChange={handleChange}
                    value={user.name || ''}
                />

                <Input
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite o seu telefone"
                    handleOnChange={handleChange}
                    value={user.phone || ''}
                />

                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite a sua senha"
                    handleOnChange={handleChange}
                />

                <Input
                    text="Confirmação de Senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme a sua senha"
                    handleOnChange={handleChange}
                />

                <input type="submit" value="Editar" />
            </form>
        </section>
    )
}
export default Profile;
import { useNavigate } from "react-router-dom"
import { useForm } from "../../Hook/useForm"

export const Login = () => {

    const navigate = useNavigate()

    const {email, password, onInputChange, onResetForm} = useForm({
        email: '',
        password: '',
    })

    const onLogin = (e) => {
        e.preventDefault()

        navigate('/boardpage', {
            replace: true,
            state: {
                logged: true,
                email,
                password
            }
        })

        onResetForm()
    }

    const goToRegister = () => {
        navigate('/register');
    };

    const goToForgottenPass = () => {
        navigate('/forgotten');
    };

    return (

        <>
            <div className="flex w-full h-screen">
                <div className="w-full flex items-center justify-center">
                    <section className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
                        <h1 className="text-5xl font-semibold">Bienvenido</h1>
                        <p className="font-medium text-lg text-gray-500 mt-4">Iniciar Sesión</p>
                        <form onSubmit={onLogin} action="">
                            <div className="mt-4">
                                <label htmlFor="email" className="text-lg font-medium">Email</label>
                                <input
                                    className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={onInputChange}
                                    required
                                    autoComplete="off"
                                    placeholder="Ingrese Email"
                                />
                                
                            </div>

                            <div>
                                <label htmlFor="password" className="text-lg font-medium">Contraseña</label>
                                <input
                                    className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={onInputChange}
                                    required
                                    autoComplete="off"
                                    placeholder="Ingrese Contraseña"
                                />
                            </div>

                            <div className="mt-4 flex justify-between items-center">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="remember"
                                    />
                                    <label className="ml-2 font-medium text-base" htmlFor="">Recordar</label>
                                </div>
                                <button className="ml-3 font-medium text-base text-violet-500" onClick={goToForgottenPass}>Olvidé la contraseña</button>
                            </div>

                            <div className="mt-4 flex flex-col gap-y-4">
                                <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">Iniciar Sesión</button>
                                <button className=" py-2 border-2 rounded-xl border-gray-100 flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
                                        <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
                                        <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
                                        <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />
                                    </svg>
                                    Iniciar Sesión con Google
                                </button>
                            </div>

                            <div className="mt-8 flex justify-center items-center">
                                <p className="font-medium text-base">¿No tienes cuenta?</p>
                                <button className="text-violet-500 text-base font-medium ml-2" onClick={goToRegister}>Registrarse</button>
                            </div>
                        </form>
                    </section>
                </div>

            </div>
        </>

    )
}


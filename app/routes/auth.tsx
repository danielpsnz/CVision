import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = () => ([
    { title: 'CVision | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

    return (
        <main className="bg-indigo-50 min-h-screen flex items-center justify-center px-2">
            <div className="gradient-border shadow-lg w-full max-w-md mx-auto">
                <section className="flex flex-col gap-8 bg-white rounded-lg sm:rounded-2xl p-4 sm:p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-xl sm:text-2xl font-bold">Bienvenido!</h1>
                        <h2 className="text-base sm:text-lg">Inicia sesión para continuar con tu búsqueda de empleo</h2>
                    </div>
                    <div className="flex items-center justify-center">
                        {isLoading ? (
                            <button className="primary-button animate-pulse w-full">
                                <p>Iniciando sesión...</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="primary-button w-full" onClick={auth.signOut}>
                                        <p>Desconectarse</p>
                                    </button>
                                ) : (
                                    <button className="primary-button w-full" onClick={auth.signIn}>
                                        <p>Iniciar sesión</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Auth

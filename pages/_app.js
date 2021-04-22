import { wrapper } from '../redux/store';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import 'antd/dist/antd.css';
import '../styles/index.scss';
import '../styles/base.css';
import '../styles/header.css';
import '../styles/content.css';
import '../styles/reset.css';

// context
import ContextApp from 'util/ContextApp';

const arrTypeUser = ['id', 'name', 'phone', 'email', 'address', 'info', 'position', 'role', 'coin', 'password', 'status_user', 'create'];
function App({ Component, pageProps }) {
    const router = useRouter();

    // state
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        if (user) {
            arrTypeUser.map((item) => {
                localStorage.setItem(`${item}`, user[item]);
            });
        } else {
            const emailLocal = localStorage.getItem(`${arrTypeUser[3]}`);
            emailLocal &&
                setUser({
                    id: localStorage.getItem(`${arrTypeUser[0]}`),
                    name: localStorage.getItem(`${arrTypeUser[1]}`),
                    phone: localStorage.getItem(`${arrTypeUser[2]}`),
                    email: localStorage.getItem(`${arrTypeUser[3]}`),
                    address: localStorage.getItem(`${arrTypeUser[5]}`),
                    info: localStorage.getItem(`${arrTypeUser[5]}`),
                    position: localStorage.getItem(`${arrTypeUser[6]}`),
                    role: localStorage.getItem(`${arrTypeUser[7]}`),
                    coin: localStorage.getItem(`${arrTypeUser[8]}`),
                    password: localStorage.getItem(`${arrTypeUser[9]}`),
                    status_user: localStorage.getItem(`${arrTypeUser[10]}`),
                    create: localStorage.getItem(`${arrTypeUser[11]}`),
                });
        }
    }, [user]);
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <ContextApp.Provider
            value={{
                user,
                setUser,
            }}
        >
            <Component {...pageProps} />
        </ContextApp.Provider>
    );
}

export default wrapper.withRedux(App);

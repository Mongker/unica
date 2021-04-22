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

function App({ Component, pageProps }) {
    const router = useRouter();

    // state
    const [user, setUser] = React.useState(null);

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
        <ContextApp.Provider value={{
            user,
            setUser,
        }}>
            <Component {...pageProps} />
        </ContextApp.Provider>
    );
}

export default wrapper.withRedux(App);

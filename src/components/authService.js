import Cookies from 'universal-cookie';

const cookies = new Cookies();

const authService = {
    signIn(callback) {
        cookies.set('auth', true, {path: '/'});
        setTimeout(callback, 100);
    },

    signOut(callback) {
        cookies.set('auth', false, {path: '/'});
        setTimeout(callback, 100);
    },

    isAuthenticated() {
        return cookies.get('auth') === 'true';
    }
}

export default authService;


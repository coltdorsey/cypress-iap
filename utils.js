module.exports = (on, config) => {
    on('task', {
        async getIAPToken({ url, cid }) {
            const { GoogleAuth } = require('google-auth-library');
            const auth = new GoogleAuth();
            const client = await auth.getIdTokenClient(cid);
            const res = await client.request({ url });
            return res.config.headers.Authorization.split(" ")[1]
        }
    })
    return config
}
// module.exports = async function getIAPToken({ url, cid }) {
//     const { GoogleAuth } = require('google-auth-library');
//     const auth = new GoogleAuth();
//     debugger
//     const client = await auth.getIdTokenClient(cid);
//     const res = await client.request({ url });
//     return res.config.headers.Authorization.split(" ")[1]  
// }
// export async function getIAPToken({ url, cid }) {
//     debugger
//     const auth = new GoogleAuth();
//     const client = await auth.getIdTokenClient(cid);
//     const res = await client.request({ url });
//     return res.config.headers.Authorization.split(" ")[1]
// }
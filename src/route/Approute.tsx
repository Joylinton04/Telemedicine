import Layout from '@/Layout/Layout';
import Home from '@/Pages/Home';
import { createBrowserRouter } from 'react-router-dom';

const Approute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                index: true,
            }
        ]
    }
])
 


export default Approute;

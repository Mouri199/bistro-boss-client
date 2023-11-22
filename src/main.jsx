import React from 'react'
import ReactDOM from 'react-dom/client'

import {

  RouterProvider
} from "react-router-dom";
import './index.css'
import { router } from './Components/Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthContributor from './Components/AuthContributor/AuthContributor';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthContributor>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthContributor>

  </React.StrictMode>,
)

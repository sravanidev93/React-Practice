import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { loadContacts, loadContact } from './loaders.js';
import ContactList from './ContactList.jsx';
import Contact from './Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} loader={loadContacts}>
      <Route path="/contacts" element={<ContactList />} >
      </Route>
      <Route path="/contacts/:contactId" loader={({ params }) => loadContact({ contactId: params.contactId })} element={<Contact />} >
      </Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)




import { useState, useRef } from "react"
import ContactList from "./ContactList"
import { Outlet } from "react-router-dom";
import { css } from '@emotion/react'

function Header({ handleTextChange }) {
  const inputElRef = useRef(null);
  function handleSubmit(ev) {
    ev.preventDefault();
    handleTextChange(inputElRef.current.value)

  }
  return <header css={css`padding:16px;
      border-bottom:1px solid;`} >
    <form onSubmit={handleSubmit} css={css`display:flex;
      justify-content:space-between;
      `}>
      <input type="text" placeholder="Search Contacts here ..." ref={inputElRef}
        css={css`padding:8px;
        border-radius:8px;`

        } />
      <button type="submit" css={css`padding:4px 8px;border-radius:8px;`}>search</button>
    </form>
  </header>
}
function Footer() {
  return <footer css={css`
  border-top:1px solid;
  padding:16px;`}>
    <p>footer</p>
  </footer>
}
function Sidenav() {
  const [searchText, setSearchText] = useState("");
  function handleTextChange(search) {
    setSearchText(search);
  }
  return (
    <div css={css`display:grid;
    grid-template-rows:auto 1fr auto;
    border-right:1px solid;`}>
      <Header handleTextChange={handleTextChange} />
      <div css={css`padding:16px;
                    overflow:auto;`}>
        <ContactList searchText={searchText} />
      </div>

      <Footer />
    </div>
  )
}
function Contents() {
  return <section >
    {<Outlet />}
  </section>
}
function App() {
  return (
    <main css={css`display:grid;
    grid-template-columns:minmax(300px,25%) 1fr;
    height:100vh;
    `}>
      <Sidenav />
      <Contents />

    </main>
  )
}

export default App

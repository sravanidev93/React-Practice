
import { NavLink, useLoaderData } from "react-router-dom"
import { css } from "@emotion/react";

export default function ContactList({ searchText }) {
  const contacts = useLoaderData() || [];
  // console.log(contacts);

  const filteredcontacts = contacts.filter(contact => {
    const { first: firstName, last: lastName } = contact.name;
    return firstName.toLowerCase().includes(searchText.toLowerCase()) || lastName.toLowerCase().includes(searchText.toLowerCase());

  });

  console.log(filteredcontacts);


  return (
    <section css={css`height:500px`}>
      <ul css={css`list-style:none;
            padding:0;`
      }>
        {filteredcontacts.map((contact) => {
          // const {cell}=contact.cell;
          // console.log(contact.phone,contact.cell)
          const { value: contactId } = contact.id;
          const { title, first, last } = contact.name;
          // const {email}=contact;
          // const {age}=contact.dob;
          // console.log(contactId,title,first,last,email,age)
          return (
            <li key={contactId}>
              <NavLink css={css`text-decoration:none;
                padding: 8px 4px;
                color:blue;
                display:block;

                &:hover{
                display:block;
                background-color:blue;
                color:white;
                border-radius:8px;
                transition:all 1s}`} to={`/contacts/${contactId}`}>
                {`${first} ${last}`}
              </NavLink>
            </li>
          )
        })}
      </ul>

    </section>
  )
}

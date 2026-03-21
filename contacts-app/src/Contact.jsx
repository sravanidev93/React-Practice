
import { useLoaderData } from "react-router-dom";
import { css } from "@emotion/react";

export default function Contact() {
    const contact = useLoaderData() || [];
    console.log(contact);
    console.log(contact.phone, contact.cell)
    const { value: contactId } = contact.id;
    const { thumbnail } = contact.picture;
    const { title, first, last } = contact.name;
    const { email } = contact;
    const { age } = contact.dob;
    const { city, state, country } = contact.location;
    // console.log(contactId,title,first,last,email,age)
    return <section css={css`display:grid;
    grid-template-columns:250px 1fr;
    padding:16px;
    `}>
        <section>
            <img id={"image" - `${first}${last}`} src={thumbnail} css={css`height:100%;
                width:100%;
                object-fit:contain;
                `} alt={"image" - `${first}${last}`}></img>

        </section>
        <article key={"details" - `${first}${last}`} css={css`display:flex;
            flex-direction:column;
            justify-content:space-evenly;
            align-items:flex-start;
            padding:16px;`}>
            <h2>{`${title} ${first} ${last}`}</h2>
            <h3>{contact.cell}</h3>
            <h3>{email}</h3>
            <p>{`${city}`}</p>
            <p>{`${state},${country}`}</p>

        </article>
    </section>
}
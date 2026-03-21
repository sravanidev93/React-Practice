const URL = "https://randomuser.me/api/?results=150&seed=c8e0527dbafbe075?inc=name,location,email,dob,phone,cell,picture&nat=IN"

export const loadContacts = async () => {
    const data = await fetch(URL);
    return (await data.json())?.results;
}

export const loadContact = async ({ contactId }) => {
    const contacts = await loadContacts();
    const result = contacts.find(contact => contact.id.value == contactId);
    return result;
}
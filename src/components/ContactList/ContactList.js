import { Contact } from "components/Contact/Contact";
import { List } from "./ContactList.styled";

export const ContactList = ({items, onDeleteItem}) =>(



<ul>{items.map((item, id)=>
<List key={id}>

<Contact Contact = {item} DeleteItem ={onDeleteItem}/>
</List>
          )}    
</ul>
   


)

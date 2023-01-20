import { Button, Info} from "./Contact.styled"

export const Contact  = ({Contact: {id, name, number},DeleteItem }) =>(
<>
            <Info>{name}: {number}</Info>
            <Button
          type="button"
          className="TodoList__btn"
          onClick={() => DeleteItem(id)}
        >
          Удалить
        </Button>
        </>
)
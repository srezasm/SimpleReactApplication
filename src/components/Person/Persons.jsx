import React from "react";
import { useContext } from "react";
import Person from "./Person";
import SimpleContext from "../../context/SimpleContext";

const Persons = () => {
    const context = useContext(SimpleContext);
    
    return (
        <div>
            {context.state.persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() =>
                        context.handleDeletePerson(person.id)
                    }
                    changed={event =>
                        context.handleNameChange(event, person.id)
                    }
                />
            ))}
        </div>
    );
};

export default Persons;

import { useState } from "react";
import { Options2 } from "../styles";

export default function Options2Comp(props) {
    const {selectedIngredientsState, handleIngredientsChange, errorIngredientsState} = props;
    

    const malzemeler = [
        { id: 1, name: "Peperoni" },
        { id: 2, name: "Tavuk Izgara" },
        { id: 3, name: "Mısır" },
        { id: 4, name: "Sarımsak" },
        { id: 5, name: "Ananas" },
        { id: 6, name: "Sosis" },
        { id: 7, name: "Soğan" },
        { id: 8, name: "Sucuk" },
        { id: 9, name: "Biber" },
        { id: 10, name: "Kabak" },
        { id: 11, name: "Kanada Jambonu" },
        { id: 12, name: "Domates" },
        { id: 13, name: "Jalapeno" },
        { id: 14, name: "Zeytin" }
    ];

    const errorMessagesIngredients = {
        high: "Lütfen en fazla 10 malzeme seçiniz",
        below: "Lütfen en az 4 malzeme seçiniz"
    };

    return (
        <>
            <Options2>
                {malzemeler.map((malzeme) => (
                    <label key={malzeme.id}>
                        <input
                        className="mr-2"
                            type="checkbox"
                            name={malzeme.name}
                            onChange={handleIngredientsChange}
                            checked={selectedIngredientsState.includes(malzeme.name)}
                        />
                        {malzeme.name}
                    </label>
                ))}
            </Options2>
            {errorIngredientsState.high && <p style={{ color: "red" }}>{errorMessagesIngredients.high}</p>}
            {errorIngredientsState.below && <p style={{ color: "red" }}>{errorMessagesIngredients.below}</p>}
        </>
        
    );

    
}

/* import React from 'react'; */
import AccordionItemPersonales from "./AccordionItems/AccordionItemPersonales";
import AccordionItemFamiliares from "./AccordionItems/AccordionItemFamiliares";
import AccordionItemEstadia from "./AccordionItems/AccordionItemEstadia";
import AccordionItemGineco from "./AccordionItems/AccordionItemGineco";

const AccordionMain = () => {
    return (
        /* componente superior del acordión */
        <div className="accordion" id="accordionParent">
            <AccordionItemPersonales></AccordionItemPersonales>
            <AccordionItemFamiliares></AccordionItemFamiliares>
            <AccordionItemEstadia></AccordionItemEstadia>
            <AccordionItemGineco></AccordionItemGineco>
        </div>
    );
}
                    
export default AccordionMain;

import React from 'react';

interface MenuViewProps {
    mapCard: string;
    mapName: string
};

const Mapcard: React.FC<MenuViewProps> = ({mapCard, mapName}: MenuViewProps) => {

   return( 
   <>
        {mapCard}
    </>
)}

export default Mapcard
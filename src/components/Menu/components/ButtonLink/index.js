import React from 'react';

function ButtonLink(props) {
    // props =>{classname: "o que alguem passar" href:"/"}
    return (
        <a className={props.className} href={props.href}>
            Novo Vídeo
        </a>
    );
}

export default ButtonLink;
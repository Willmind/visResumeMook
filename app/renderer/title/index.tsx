import React from 'react';
interface IProps {
    /**
     * @description 标题
     */
    text: string;
    /**
     * @description 样式
     */
}

function Title({
                   text
               }: IProps) {
    return (
        <div>{text}</div>
    )
}

export default Title;

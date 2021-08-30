export const MESSAGE_EVENT_NAME_MAPS = {
    OPEN_FORM_MODAL: 'open_form_modal', // 简历模块选择
};

class Messager {
    //发送
    send = (eventName: string, payload: any) => {
        console.log(123);
        console.log(eventName);
        document.dispatchEvent(
            new CustomEvent(eventName, {
                detail: {
                    payload: payload,
                },
            })
        );
    };
    //接收
    receive = (e: any, messageHandler: Function) => {
        if (messageHandler) {
            const payload = e?.detail?.payload;
            messageHandler(payload);
        }
    };
}

export default new Messager();